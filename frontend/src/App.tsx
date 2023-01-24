import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import io, {Socket} from 'socket.io-client'
import Messages from './Messages'
import MessageInput from './MessageInput'

function App() {
  const [socket, setSocket] = useState<Socket>()
  const [messages, setMessages] = useState<string[]>([])
  

  const send = (value:string, username:string ) =>
  {
    if(username !== "User")
    {
      let new_val = username;
      new_val += " said: "
      new_val += value
      socket?.emit("message", new_val)
    }else
      socket?.emit("message", value)
  }

  useEffect(() => 
  {
    const newSocket = io("http://localhost:8001")
    setSocket(newSocket)
  }, [setSocket])
  
  const messageListener  = (message: string) => 
  {
    setMessages([...messages, message])
  }

  useEffect(() => 
  {
    socket?.on("message", messageListener)
    return () =>
    {
      socket?.off("message", messageListener)
    }
  }, [messageListener])

  return (
    <>
    {" "}
    <MessageInput send={send}/>
    <Messages messages={messages}/>
    </>
  )
}

export default App
