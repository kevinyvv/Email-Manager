import { Fragment } from "react"
import React, {useState, useEffect} from 'react'

const AI = (email:any) => {

    const [trash, setTrash] = useState(true)
    const [reply, setReply] = useState('')
    const [reason, setReason] = useState('')
    const [loading, setLoading] = useState(true)
    const [regen, setRegen] = useState(true)

    const Reply  = (id:number) => {
       fetch("http://127.0.0.1:8080/content/reply/" + id).then(response => response.json()
       ).then(data => setReply(data.reply)
        ).then(()=> setLoading(false)) //get reply from chatgpt endpoint
    }

    const Reason = (check:String, content:String) => {
        console.log(JSON.stringify({
            "content" : content
         }))
        fetch("http://127.0.01:8080/why/" + check,
         {method: 'POST',
         headers: {
            "Content-Type": "application/json",
          },
         body: JSON.stringify({
            "content" : content
         })
    }).then(reason => reason.json()).then(data => setReason(data.reason))
    }


    const delete_email = (id:number) => {
        fetch("http://127.0.0.1:8080/emails/" + id, {method: 'DELETE'}).then(() => 
        {
            console.log("Email Deleted!")  //log success or something
            location.reload()
            alert("Email sent to trash.")
        })
    }

    const create_draft = (id:number, content:String) => {
        fetch("http://127.0.01:8080/reply/" + id,
         {method: 'POST',
         headers: {
            "Content-Type": "application/json",
          },
         body: JSON.stringify({
            "sender" : email.email.returnto, 
            "subject" :  email.email.subject  ,
            "content" : content
         })
    }).then(()=>
    alert("Draft saved!"))
    }

    useEffect(() => {
        if (email.email != null) {
            if (email.email.check == "Yes" || trash == false)
            {
                setReason('')
                Reply(email.email.id)
                console.log(reply)
            }
        }
    }, [email, regen])
// have part that gets "check"
// if "check" == "No" then delete email (offer option)
// else, 
// generate ai reply with api endpoint
// option to regenerate, keep (save) as draft

//considering: display justification for "check"

  return (
    <div className="bg-slate-950 rounded-lg py-4 px-4 mx-8 my-4 space-y-4 max-w-full h-3/4">
        <h1 className='text-sm'> AI Suggestion</h1>

        { email.email == null ? <h1 className="skeleton w-1/3 h-8"> </h1>: 
            <div className='grid grid-cols-2 h-3/4'>
                <div>
                    <h1> Should you reply to the email? 
                        <button className='badge mx-2' onClick={()=>Reason(email.email.check, email.email.content)}> {email.email.check}  </button>
                    </h1>
                    <p className="text-sm mx-4 px-2 my-2"> {reason} </p>
                    <button className="my-2 btn btn-sm" onClick={()=> setTrash(false)}> Override </button>
                </div>

            {email.email.check != null && email.email.check == "Yes" || trash == false ?
                <div className='space-y-4 max-w-1/2'>
                    <h1> AI Generated Reply </h1>
                    <h1 className="px-2 outline rounded-sm font-bold"> Subject: Reply to {email.email.subject} </h1>
                    {loading ? <p className='skeleton px-2 text-center py-1 text-sm font-bold'> Generating reply... </p> 
                            : <div className="h-96">
                                <p className="outline px-2 rounded-sm outline-1 max-h-96 overflow-y-auto 
                                text-wrap whitespace-pre"> {reply}
                                </p>
                                <button className="btn btn-sm my-2" onClick={()=> create_draft(email.email.id, reply)}> Save as Draft</button>
                                <button className="btn btn-sm mx-2 my-2" onClick={()=> {setLoading(true) 
                                                                                    setRegen(!regen)}} > Regenerate </button>
                            </div> 
                        }
                    
                </div>
                : <button className='btn btn-sm w-1/5' onClick={()=>delete_email(email.email.id)}>
                    Delete Email
                </button> //delete button (because email is either spam/non-important)
            }
            </div>
        }
    </div>
  )
}

export default AI