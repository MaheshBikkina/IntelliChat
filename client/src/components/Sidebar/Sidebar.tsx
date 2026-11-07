import {
  Plus,
  MessageSquare,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";

import "./Sidebar.css";

interface SidebarProps {
  onNewChat: () => void;
}

const Sidebar = ({ onNewChat }: SidebarProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const conversations = [
    "Understanding React Hooks",
    "JavaScript Closures",
    "System Design Basics",
    "TypeScript Generics",
  ];

  return (
    <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">I</div>
          {!isSidebarCollapsed && <span>IntelliChat</span>}
        </div>

        <button
          className="icon-button"
          aria-label={
            isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
          }
          onClick={() => setIsSidebarCollapsed((prev: boolean) => !prev)}
        >
          {!isSidebarCollapsed ? (
            <PanelLeftClose size={19} />
          ) : (
            <PanelLeftOpen size={19} />
          )}
        </button>
      </div>

      <button
        className="new-chat-button"
        onClick={onNewChat}
      >
        <Plus size={18} />
        {!isSidebarCollapsed && <span>New chat</span>}
      </button>

      <button className="search-button">
        <Search size={17} />
        {!isSidebarCollapsed && <span>Search conversations</span>}
      </button>

      <div className="sidebar-section">
        {!isSidebarCollapsed && <p className="section-label">Recent</p>}

        <div className="conversation-list">
          {conversations.map((conversation) => (
            <button
              className="conversation-item"
              key={conversation}
              title={isSidebarCollapsed ? conversation : undefined}
            >
              <MessageSquare size={16} />
              {!isSidebarCollapsed && <span>{conversation}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="profile-avatar">MB</div>
        {!isSidebarCollapsed && (
          <div className="profile-info">
            <strong>My Workspace</strong>
            <span>Personal account</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
