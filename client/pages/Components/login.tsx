import React, {useState, useEffect} from 'react'

const Login = () => {
  const [message, setMessage] = useState("loading");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emails, setEmails] = useState("login first!")

  const GetAPI = ()=> {
    fetch("http://127.0.0.1:8080/login").then(
        () => location.reload()
    )
  }
  /*then(
      response => response.json()
    ).then((data) => {
      setMessage(data.message) //matches whatever is in server.py
      setEmails(data.unread_mail)
    })
    */

  return (
    <div className='h-screen flex items-center justify-center content-center'>
        <div className='items-center text-center'>
        <h1 className='py-4'> Welcome to Email Manager</h1>
        <button onClick={GetAPI} className='btn btn-neutral w-50 h-50'> Login to Gmail</button>
        </div>
    </div>
  )
}

export default Login