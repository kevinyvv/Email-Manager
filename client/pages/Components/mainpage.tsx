import React, {useEffect, useState} from 'react'
import Mail from './MailViewContainer'
import MailListContainer from './MailListContainer'
import AI from './AI'

const Main = () => {

const [emailData, setEmailData] = useState(null)

// get unread emails

//check if email is worth responding to

// generate replies with chatgpt

//delete emails
  const CallBack  = (childData: any)  => {
    const newData = childData
    setEmailData(newData)
    console.log(emailData)
  }

  return (
    <div className='w-screen h-screen'>
      <div className='flex w-screen'>
        <Mail props={emailData}/>
        <MailListContainer handleCallback={CallBack}/>
      </div>
      <div className='h-screen'>
        <AI email={emailData}/>
      </div>
    </div>
  )
}

export default  Main