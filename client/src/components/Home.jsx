import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Home(socket) {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
  return (
    <form className='homeContainer' onSubmit={handleSubmit}>
        <h2 className='homeHeader'>Chatnonymos</h2>
        <label htmlFor="username">Username</label>
        <input type="text" 
        minLength={4} 
        name="username" 
        id='username'
        className='usernameInput' 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button className='homecta'>SIGN IN</button>
    </form>
  )
}

export default Home