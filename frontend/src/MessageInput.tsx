import React, { useState } from 'react'

const MessageInput = ({send}: {send: (val:string, username:string) => void}) =>
{
    const [value, setValue] = useState("")
    const [username, setUsername] = useState<string>("")
    return (
        <>
        Enter you username 
        <br/>
        <input placeholder='User' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <input placeholder='Type your messsage' value={value} onChange={(e) => setValue(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={() => send(value, username)}>Send</button>
        </>
    )

}

export default MessageInput 