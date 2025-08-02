import React, { useState } from 'react';
import { 
  Search, MoreVertical, MessageSquare, Send, ChevronDown, 
  Users, Plus, Smile, Paperclip, Mic, Trash2, LogOut, Flag 
} from 'lucide-react';

// Built-in Avatar components to replace the missing import
const Avatar = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative inline-flex">{children}</div>;
};

const AvatarImage = ({ src, alt }: { src?: string; alt?: string }) => {
  return (
    <img 
      src={src} 
      alt={alt || 'Avatar'} 
      className="h-10 w-10 rounded-full object-cover"
    />
  );
};

const AvatarFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
      <span className="font-medium text-gray-600">{children}</span>
    </div>
  );
};

const CommunityPage = () => {
  const [activeChat, setActiveChat] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const groups = [
    { id: 1, name: 'General Discussion', members: 243, lastMessage: 'Welcome everyone!', unread: 0 },
    { id: 2, name: 'Computer Science', members: 87, lastMessage: 'Anyone solved problem 3?', unread: 2 },
    { id: 3, name: 'Engineering', members: 56, lastMessage: 'Exam dates announced', unread: 0 },
  ];

  const users = [
    { id: 101, name: 'Alex Johnson', avatar: '', status: 'online', lastMessage: 'Hey, how are you?' },
    { id: 102, name: 'Maria Garcia', avatar: '', status: 'offline', lastMessage: 'See you tomorrow!' },
    { id: 103, name: 'James Wilson', avatar: '', status: 'online', lastMessage: 'Thanks for the notes' },
  ];

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isYou: true
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleSelectChat = (chat: any) => {
    setActiveChat(chat);
    setShowOptions(false);
    setMessages([
      {
        id: 1,
        sender: chat.name,
        text: chat.lastMessage,
        time: '10:30 AM',
        isYou: false
      },
      {
        id: 2,
        sender: 'You',
        text: 'Hello there!',
        time: '10:32 AM',
        isYou: true
      }
    ]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Groups and Users */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200 flex flex-col">
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups or people"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Groups Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-700 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Groups
              </h2>
              <button className="text-blue-500 hover:text-blue-700">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-1">
              {groups.map(group => (
                <div 
                  key={group.id}
                  onClick={() => handleSelectChat({ ...group, type: 'group' })}
                  className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${activeChat?.id === group.id ? 'bg-blue-50' : ''}`}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Users className="h-5 w-5" />
                    </div>
                    {group.unread > 0 && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {group.unread}
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="font-medium text-gray-900">{group.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{group.lastMessage}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {group.members} members
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Users Section */}
          <div className="p-3 border-t border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-2">Direct Messages</h2>
            <div className="space-y-1">
              {users.map(user => (
                <div 
                  key={user.id}
                  onClick={() => handleSelectChat({ ...user, type: 'user' })}
                  className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${activeChat?.id === user.id ? 'bg-blue-50' : ''}`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {user.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{user.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Chat Area */}
      {activeChat ? (
        <div className="hidden md:flex flex-col flex-1">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between">
            <div className="flex items-center">
              {activeChat.type === 'group' ? (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <Users className="h-5 w-5" />
                </div>
              ) : (
                <div className="relative mr-3">
                  <Avatar>
                    <AvatarImage src={activeChat.avatar} />
                    <AvatarFallback>{activeChat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {activeChat.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
              )}
              <div>
                <h2 className="font-semibold">{activeChat.name}</h2>
                {activeChat.type === 'group' && (
                  <p className="text-xs text-gray-500">{activeChat.members} members</p>
                )}
              </div>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowOptions(!showOptions)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
              
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {activeChat.type === 'group' ? (
                    <>
                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <Users className="h-4 w-4 mr-2" />
                        Group Info
                      </button>
                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <LogOut className="h-4 w-4 mr-2" />
                        Leave Group
                      </button>
                    </>
                  ) : (
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <Users className="h-4 w-4 mr-2" />
                      View Profile
                    </button>
                  )}
                  <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    <Flag className="h-4 w-4 mr-2" />
                    Report
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Chat
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-3">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isYou ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${msg.isYou ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isYou ? 'text-blue-100' : 'text-gray-500'} text-right`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 mx-2 py-2 px-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="p-2 text-blue-500 hover:text-blue-700"
              >
                {message.trim() === '' ? (
                  <Mic className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty state when no chat is selected
        <div className="hidden md:flex flex-col flex-1 items-center justify-center bg-gray-50">
          <div className="text-center p-6 max-w-md">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a chat to start messaging</h3>
            <p className="text-gray-500">
              Choose from your groups or direct messages to begin a conversation
            </p>
          </div>
        </div>
      )}

      {/* Mobile Chat View - Overlay when chat is selected */}
      {activeChat && (
        <div className="md:hidden fixed inset-0 bg-white z-10 flex flex-col">
          {/* Mobile Chat Header */}
          <div className="bg-white border-b border-gray-200 p-3 flex items-center">
            <button 
              onClick={() => setActiveChat(null)}
              className="mr-2 p-1"
            >
              <ChevronDown className="h-5 w-5 transform rotate-90" />
            </button>
            <div className="flex items-center flex-1">
              {activeChat.type === 'group' ? (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                  <Users className="h-4 w-4" />
                </div>
              ) : (
                <div className="relative mr-2">
                  <Avatar>
                    <AvatarImage src={activeChat.avatar} />
                    <AvatarFallback>{activeChat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {activeChat.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
              )}
              <div className="flex-1">
                <h2 className="font-semibold">{activeChat.name}</h2>
                {activeChat.type === 'group' && (
                  <p className="text-xs text-gray-500">{activeChat.members} members</p>
                )}
              </div>
            </div>
            
            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="p-1"
            >
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Mobile Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            <div className="space-y-3">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isYou ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs rounded-lg px-3 py-2 ${msg.isYou ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isYou ? 'text-blue-100' : 'text-gray-500'} text-right`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Message Input */}
          <div className="bg-white border-t border-gray-200 p-2">
            <div className="flex items-center">
              <button className="p-1 text-gray-500">
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-1 text-gray-500">
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 mx-1 py-2 px-3 bg-gray-100 rounded-full focus:outline-none text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="p-1 text-blue-500"
              >
                {message.trim() === '' ? (
                  <Mic className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;