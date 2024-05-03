import React, {useState, useEffect} from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='chatSidebar'>
        <h1>Chatnonymos</h1>
        <div>
            <h4  className='chatHeader'>HIDDEN ACTIVE USERS</h4>
            <div className='chatUsers'>
                {users.map(user => <p key={user.socketID}>{user.socketID}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar