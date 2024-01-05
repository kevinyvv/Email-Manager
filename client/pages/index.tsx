import React, {useEffect, useState} from 'react'
import Login from './Components/login'
import Main from './Components/mainpage';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home").then(
      response => response.json()
    ).then((data) => {
      setLoggedIn(data.login) //matches whatever is in server.py
    })
  })

  return (
    <div>
    {
      loggedIn ? <Main/> : <Login/>
    }
    </div>
  )
}

export default Home