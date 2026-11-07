import { ArrowUp, Paperclip } from "lucide-react";
import { useState, type FormEvent } from "react";
import "./ChatInput.css";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || disabled) return;

    onSend(message);
    setInput("");
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <div className="chat-input-box">
        <textarea
          placeholder="Message IntelliChat..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={1}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
        />

        <div className="input-actions">
          <button type="button" className="attachment-button">
            <Paperclip size={18} />
          </button>

          <button
            type="submit"
            className="send-button"
            disabled={!input.trim() || disabled}
            aria-label="Send message"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>

      <p className="input-disclaimer">
        IntelliChat can make mistakes. Verify important information.
      </p>
    </form>
  );
};

export default ChatInput;
