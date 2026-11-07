import { Sparkles, MoreHorizontal } from "lucide-react";
import "./ChatWindow.css";
import MessageList from "../MessageList/MessageList";
import type { Message } from "../../types/chat";
import ChatInput from "../ChatInput/ChatInput";
interface ChatWindowProps {
  messages: Message[];
  onSend: (message: string) => void;
}

const ChatWindow = ({ messages, onSend }: ChatWindowProps) => {
    
  return (
    <main className="chat-window">
      <header className="chat-header">
        <div>
          <h2>New Conversation</h2>
          <span className="model-label">
            <Sparkles size={13} />
            Gemini · Preview
          </span>
        </div>

        <button className="icon-button" aria-label="More options">
          <MoreHorizontal size={21} />
        </button>
      </header>

      <section className="chat-body">
        <MessageList messages={messages} />
      </section>

      <footer className="chat-footer">
        <ChatInput onSend={onSend} />
      </footer>
    </main>
  );
};

export default ChatWindow;
