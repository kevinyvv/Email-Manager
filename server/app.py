from flask import Flask, request
#sql and flask packages
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS
from datetime import datetime
import os.path
import base64
import json
import re
import time
from email.message import EmailMessage

#google api packages
import google.auth
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

import logging
import requests
from app import *

#open api packages
from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/folder'
db = SQLAlchemy(app)
CORS(app)

class Emails(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    sender = db.Column(db.String(100))
    returnto = db.Column(db.String(100), nullable = False)
    subject = db.Column(db.String)
    content = db.Column(db.String)
    dt = db.Column(db.String, nullable=False)
    check = db.Column(db.String(5), nullable=True)

    def __repr__(self):
        return f"Email: {self.id}"
    
    def __init__(self, sender, returnto, subject, content, dt, check, why, reply):
        self.sender = sender
        self.returnto = returnto
        self.subject = subject
        self.content = content #sets up model
        self.dt = dt
        self.check = check

def format_email(email):
    return{
        "id": email.id,
        "sender": email.sender,
        "returnto": email.returnto,
        "subject": email.subject,
        "content": email.content,
        "dt": email.dt,
        "check": email.check
    }

#tests api route
@app.route("/")
def hello():
    return 'hey!'

#checks if logged in (default route)
@app.route("/api/home")
def check(): #checks if "logged in"
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        #return {"login": True}
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid or creds.expired:
        return {"login": False}
    else:
        return {"login": True}

#login
@app.route("/login")
def login():
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(               
                # your creds file here. Please create json file as here https://cloud.google.com/docs/authentication/getting-started
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
            return "sucess!!"

# stores emails into sql server from gmail api
@app.route('/emails', methods = ['POST']) 
def read_email(): #add emails to sql
    """
    sender = request.json['sender'] #grabs 
    returnto = request.json['returnto']
    subject = request.json['subject']
    content = request.json['content']
    dt = request.json['dt'] #grabs required info
    email = Emails(sender,returnto,subject,content,dt) #creates email with info
    db.session.add(email) #adds to session and commits
    db.session.commit()
    return format_email(email) #returns formatted event
    """
    readEmails()
    return "Success"

# get all emails
@app.route('/emails', methods = ['GET'])
def get_emails():
    emails = Emails.query.order_by(Emails.id.desc()).all()
    email_list = []
    for email in emails:
        email_list.append(format_email(email))
    return {'emails': email_list}

#get a specific email
@app.route('/emails/<id>', methods=['GET'])
def get_email(id):
    email = Emails.query.filter_by(id=id).first()
    formatted_email = format_email(email)
    return {'email': formatted_email}


#delete specific email
@app.route('/emails/<id>', methods = ['DELETE'])
def delete_event(id):
    email = Emails.query.filter_by(id=id).first()
    db.session.delete(email)
    db.session.commit()
    return f'Email (id: {id}) deleted!'


#gmail part below
SCOPES = ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.compose"]
def readEmails():
    emails = []
    date, subject, from_name, returnto = "","","",""
    creds = None

    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(               
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    try:
        # Call the Gmail API
        service = build('gmail', 'v1', credentials=creds)
        results = service.users().messages().list(userId='me', labelIds=['INBOX'], q="is:unread").execute()
        messages = results.get('messages',[])
        if not messages:
            print('No new messages.')
        else:
            message_count = 0
            for message in messages:
                msg = service.users().messages().get(userId='me', id=message['id']).execute()   
                email_data = msg['payload']['headers']          
                for values in email_data:
                    name = values['name']
                    if name == 'From':
                        from_name= values['value']
                        #print(from_name)
                    if name == 'Return-Path':
                        returnto = values['value']
                        #print(returnto)
                    if name == 'Date':
                        date = values['value']
                    if name == 'Subject':
                        subject = values['value']
                        #print(subject)
                        for part in msg['payload']['parts']:
                            try:
                                # only if plaintext
                                #print(part.get('partId'))
                                if part.get('partId') == '0':
                                    data = part['body']["data"]
                                    byte_code = base64.urlsafe_b64decode(data)

                                    text = byte_code.decode("utf-8")
                                    #print(text)
                                    print(from_name, returnto, subject, (str(text)), date)
                                    temporary = Emails(from_name, returnto, subject, (str(text)), date, check_content(str(text)))
                                    print(temporary)
                                    db.session.add(temporary)
                                    db.session.commit()
                                    msg  = service.users().messages().modify(userId='me', id=message['id'], body={'removeLabelIds': ['UNREAD']}).execute() 
                            except BaseException as error:
                                pass
                # mark the message as read (optional)
                                        
                    # return desired values
                            
                        
                                 
    except Exception as error:
        print(f'An error occurred: {error}')



@app.route('/reply/<id>', methods=['POST'])
def CreateReplyDraft(id):
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    replyto = request.json['sender']
    subject = request.json['subject']
    content = request.json['content']

    try:
    # create gmail api client
        service = build("gmail", "v1", credentials=creds)

    #create email msg
        message = EmailMessage()

        message["To"] = replyto
        message["From"] = "kxbofmap7i@gmail.com"
        message["Subject"] = "Reply to " + subject
        message.set_content(content)

    # encoded message
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

        create_message = {"message": {"raw": encoded_message}}
     # pylint: disable=E1101
        draft = (
            service.users()
            .drafts()
            .create(userId="me", body=create_message)
            .execute()
        )
        return (f'Draft id: {draft["id"]}\nDraft message: {draft["message"]}')

    except HttpError as error:
        print(f"An error occurred: {error}")
        return None



#openai part below
from openai import OpenAI


client = OpenAI( api_key= os.environ.get("OPENAI_API_KEY"))     
# @app.route('/content/check/<id>', methods=['GET']) #could also pass in <content> and access content tbh
def check_content(content):
    #content = Emails.query.filter_by(id=id).first()
    #content = format_email(content)['content']
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a secretary at a digital media company. " +
            "Your job is to sort emails based on whether the content of the email was written by real person or not. If the "
             + "email was written by real person, it deserves a response.  Otherwise, " +
            "other kinds of email (spam, auto-generated, etc.) should not be responded to. "},
            {"role": "user", "content": 
             "Should this email be replied to? Answer with Yes or No " + content}
        ]
    )
    return response.choices[0].message.content

@app.route("/why/<check>", methods = ['POST'])
def get_why(check):
    content = request.json["content"]
    if (check == "No"):
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a secretary at a digital media company. " +
                "Your job is to sort emails based on whether the content of the email was written by real person or not. If the "
                 + "email was written by real person, it deserves a response.  Otherwise, " +
                "other kinds of email (spam, auto-generated, etc.) should not be responded to. "
                + "You have determined that the following content should not be responded to. "},
                {"role": "user", "content": 
                "Give a concise reason why this content SHOULD NOT be responded to: " + content}
        ])
        return {"reason" : response.choices[0].message.content}
    else:
        response = client.chat.completions.create(
            model = "gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a secretary at a digital media company. " +
                "Your job is to sort emails based on whether the content of the email was written by real person or not. If the "
                + "email was written by real person, it deserves a response.  Otherwise, " +
                "other kinds of email (spam, auto-generated, etc.) should not be responded to. "
                + "You have determined that the following content should be responded to. "},
                {"role": "user", "content": 
                "Give a concise reason why this content SHOULD be responded to: " + content}
            ])
        return {"reason" : response.choices[0].message.content}

@app.route('/content/reply/<id>')
def reply_content(id):
    content = Emails.query.filter_by(id=id).first()
    content = format_email(content)['content']
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a skilled representative at a digital media company, that creates ads. Your daily job is to do meet the needs of clients, with the goal of creating a successful marketing campaign for them."},
            {"role": "user", "content": "Craft a email repsonse to the following message: " + content}
        ]
    )
    return {"reply" : response.choices[0].message.content}


#creating/updating db
with app.app_context():
   db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=8080)
