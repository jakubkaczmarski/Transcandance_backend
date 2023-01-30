import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import quokkaico from './assets/quoka.jpeg'
import './App.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from '@chatscope/chat-ui-kit-react';
  
const handleClick = ({list, message}) => 
{

}

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState({message: "Sample message", sentTime: "now", sender: "Maciek"})
  return (
  <div style={{ position:"relative", height: "500px" }}>
    <h1>  Chat  </h1>
      <MainContainer>
        <ChatContainer>       
          <MessageList>
            {/* <Message message={messageList.message}/> */}
            </MessageList>
          <MessageInput placeholder="Type message here" onClick={handleClick} />        
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default App
