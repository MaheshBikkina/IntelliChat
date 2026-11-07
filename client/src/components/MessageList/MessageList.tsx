
import { Bot, User } from "lucide-react";
import type { Message } from "../../types/chat";
import "./MessageList.css"

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  if (messages.length === 0) {
    return (
      <div className="welcome-screen">
        <div className="welcome-icon">
          <Bot size={30} />
        </div>

        <h1>What can I help you with?</h1>

        <p>
          Ask questions, explore ideas, or learn something new.
        </p>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-row ${message.role}`}
        >
          <div className="message-avatar">
            {message.role === "assistant" ? (
              <Bot size={19} />
            ) : (
              <User size={19} />
            )}
          </div>

          <div className="message-content">
            <span className="message-author">
              {message.role === "assistant" ? "IntelliChat" : "You"}
            </span>

            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
