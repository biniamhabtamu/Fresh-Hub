import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { CheckCircle2, XCircle, RefreshCw, User, Shield, MessageSquare, Send } from 'lucide-react';

interface PremiumMessage {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

interface UserData {
  id: string;
  displayName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  transactionId?: string;
  premiumMessages?: PremiumMessage[];
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'premium'>('pending');
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const usersQuery = query(collection(db, 'users'));
        const querySnapshot = await getDocs(usersQuery);
        
        const usersData: UserData[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          usersData.push({
            id: doc.id,
            displayName: data.displayName || 'No Name',
            email: data.email,
            isPremium: data.isPremium || false,
            premiumStatus: data.premiumStatus || 'pending',
            transactionId: data.transactionId,
            premiumMessages: data.premiumMessages?.map((msg: any) => ({
              id: msg.id,
              text: msg.text,
              sender: msg.sender,
              timestamp: new Date(msg.timestamp?.seconds * 1000)
            }))
          });
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleApprove = async (userId: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: true,
        premiumStatus: 'approved',
        premiumMessages: [
          ...(selectedUser?.premiumMessages || []),
          {
            id: Date.now().toString(),
            text: 'Your premium request has been approved!',
            sender: 'admin',
            timestamp: new Date()
          }
        ]
      });
      
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: true, 
          premiumStatus: 'approved',
          premiumMessages: [
            ...(user.premiumMessages || []),
            {
              id: Date.now().toString(),
              text: 'Your premium request has been approved!',
              sender: 'admin',
              timestamp: new Date()
            }
          ]
        } : user
      ));
      
      if (selectedUser?.id === userId) {
        setSelectedUser({
          ...selectedUser,
          isPremium: true,
          premiumStatus: 'approved',
          premiumMessages: [
            ...(selectedUser.premiumMessages || []),
            {
              id: Date.now().toString(),
              text: 'Your premium request has been approved!',
              sender: 'admin',
              timestamp: new Date()
            }
          ]
        });
      }
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (userId: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: false,
        premiumStatus: 'rejected',
        premiumMessages: [
          ...(selectedUser?.premiumMessages || []),
          {
            id: Date.now().toString(),
            text: 'Your premium request has been rejected. Please contact support if you believe this is an error.',
            sender: 'admin',
            timestamp: new Date()
          }
        ]
      });
      
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: false, 
          premiumStatus: 'rejected',
          premiumMessages: [
            ...(user.premiumMessages || []),
            {
              id: Date.now().toString(),
              text: 'Your premium request has been rejected. Please contact support if you believe this is an error.',
              sender: 'admin',
              timestamp: new Date()
            }
          ]
        } : user
      ));
      
      if (selectedUser?.id === userId) {
        setSelectedUser({
          ...selectedUser,
          isPremium: false,
          premiumStatus: 'rejected',
          premiumMessages: [
            ...(selectedUser.premiumMessages || []),
            {
              id: Date.now().toString(),
              text: 'Your premium request has been rejected. Please contact support if you believe this is an error.',
              sender: 'admin',
              timestamp: new Date()
            }
          ]
        });
      }
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  const sendAdminMessage = async () => {
    if (!adminMessage.trim() || !selectedUser) return;
    
    try {
      const newMsg = {
        id: Date.now().toString(),
        text: adminMessage,
        sender: 'admin' as const,
        timestamp: new Date()
      };
      
      await updateDoc(doc(db, 'users', selectedUser.id), {
        premiumMessages: [...(selectedUser.premiumMessages || []), newMsg]
      });
      
      setUsers(users.map(user => 
        user.id === selectedUser.id ? { 
          ...user, 
          premiumMessages: [...(user.premiumMessages || []), newMsg]
        } : user
      ));
      
      setSelectedUser({
        ...selectedUser,
        premiumMessages: [...(selectedUser.premiumMessages || []), newMsg]
      });
      
      setAdminMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'pending') return user.premiumStatus === 'pending';
    if (filter === 'premium') return user.isPremium;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User List */}
          <div className="lg:col-span-1 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-purple-800 to-indigo-800">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-white">Premium Requests</h1>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFilter('pending')}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${filter === 'pending' ? 'bg-white text-purple-800' : 'text-white hover:bg-purple-700'}`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setFilter('premium')}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${filter === 'premium' ? 'bg-white text-purple-800' : 'text-white hover:bg-purple-700'}`}
                  >
                    Premium
                  </button>
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${filter === 'all' ? 'bg-white text-purple-800' : 'text-white hover:bg-purple-700'}`}
                  >
                    All
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {loading ? (
                <div className="flex justify-center items-center p-12">
                  <RefreshCw className="h-8 w-8 text-purple-600 animate-spin" />
                </div>
              ) : filteredUsers.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <li 
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className={`px-6 py-4 cursor-pointer hover:bg-gray-50 ${selectedUser?.id === user.id ? 'bg-purple-50' : ''}`}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{user.displayName}</p>
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.isPremium 
                                ? 'bg-green-100 text-green-800' 
                                : user.premiumStatus === 'pending' 
                                  ? 'bg-yellow-100 text-yellow-800' 
                                  : 'bg-red-100 text-red-800'
                            }`}>
                              {user.isPremium ? 'Premium' : user.premiumStatus}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 truncate">{user.email}</p>
                          {user.transactionId && (
                            <p className="text-xs text-gray-500 mt-1">
                              TXN: {user.transactionId}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-6 py-4 text-center text-sm text-gray-500">
                  No users found
                </div>
              )}
            </div>
          </div>

          {/* User Details and Chat */}
          <div className="lg:col-span-2 space-y-6">
            {selectedUser ? (
              <>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        {selectedUser.displayName} - {selectedUser.email}
                      </h2>
                      {selectedUser.premiumStatus === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApprove(selectedUser.id)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(selectedUser.id)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedUser.isPremium 
                          ? 'bg-green-100 text-green-800' 
                          : selectedUser.premiumStatus === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedUser.isPremium ? 'Premium' : selectedUser.premiumStatus}
                      </span>
                      {selectedUser.transactionId && (
                        <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          TXN: {selectedUser.transactionId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-900 flex items-center">
                      <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                      Premium Approval Chat
                    </h3>
                  </div>
                  <div className="p-4 space-y-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {selectedUser.premiumMessages?.length ? (
                      selectedUser.premiumMessages
                        .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
                        .map((message) => (
                          <div 
                            key={message.id}
                            className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${message.sender === 'admin' 
                                ? 'bg-purple-100 text-purple-900 rounded-tr-none' 
                                : 'bg-gray-100 text-gray-900 rounded-tl-none'}`}
                            >
                              <p className="text-sm">{message.text}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </p>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No messages yet
                      </p>
                    )}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={adminMessage}
                        onChange={(e) => setAdminMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                      <button
                        onClick={sendAdminMessage}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                      >
                        <Send className="h-5 w-5 mr-1" />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden h-full flex items-center justify-center">
                <div className="p-8 text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Select a user</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose a user from the list to view details and communicate
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}