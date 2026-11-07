import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { useState } from "react";
import type { Message } from "./types/chat";
import "./App.css"

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (message: string)=>{
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      createdAt : new Date()
    }

    setMessages((prevMessages)=>[
      ...prevMessages, newMessage
    ])
  }

  const handleNewChat = ()=>{
    setMessages([]);
  }

  return (
    <div className="app-layout">
      <Sidebar onNewChat={handleNewChat}></Sidebar>
      <ChatWindow messages={messages} onSend={handleSend}></ChatWindow>
    </div>
  )
}

export default App
