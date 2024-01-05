# Email Manager

Receive too many emails to manage? Replying to emails taking up too much of your work day? Introducing **EmailManager** (I need a better name, I know). Built to minimize the amount of time spent checking emails, EmailManager automatically labels emails as junk, or as a message to reply to. Even better, EmailManager uses AI to generate professional replies with the click of a button.

Something neat is, using Flask, I was able to code the entirety of my backend (database, API calls) with Python, and solely use Next.JS for data display and UI.

# Technologies Used
### Next.JS (Frontend)
### Flask (API)
### PostgreSQL (Database)
### Python (Backend)

# Functions

The following link contains a demo video of the web app. *link*

## View and Select Emails

Reinventing the wheel here, but EmailManager uses a PostgreSQL database to store content, replies, and additional information regarding each email. The Next.JS frontend uses fetch requests to get data sent to custom API endpoints from the Flask backend.
 

## Generate AI Replies

Automatically generates AI reply to selected emails, saving the user time and brainpower.

EmailManager uses the OpenAI API to generate these replies to emails. Interactive UI built with React components.

## Save Drafts, Delete Junk

Easily save replies as drafts, and send mail deemed to be 'junk' to the trash with a click of a button.

EmailManager makes Gmail API (Google Cloud API) calls through the Python backend to achieve these functions. Connected to Next JS frontend with Flask.


# To Do

## Automate The Process

To help make the process even more efficient, I plan to add an "automatic" mode, where emails will automatically be deleted (risky) and drafted replies too. Should not be very difficult to implement by changing my conditional statements in the React portion.

## More Aesthestic UI

I plan on making the web app more visually pleasing to look at, and use. Currently, there is a very "blocky"/"bare" feel to the app, which I hope to change.

# Publication

App will not be published for now, as the web app will require multiple servers running concurrently (one for backend, one for frontend). 


