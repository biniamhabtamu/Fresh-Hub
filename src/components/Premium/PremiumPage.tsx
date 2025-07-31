import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { CheckCircle2, Clock, AlertCircle, Phone, Copy, Banknote, Smartphone, CreditCard, MessageSquare } from 'lucide-react';
import { db } from '../../firebase/config';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface PremiumMessage {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

export default function PremiumPage() {
  const { currentUser } = useAuth();
  const [transactionId, setTransactionId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7 * 60 * 60); // 7 hours in seconds
  const [adminChecked, setAdminChecked] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<'ebirr' | 'telebirr' | 'cbe'>('telebirr');
  const [messages, setMessages] = useState<PremiumMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!currentUser?.uid) return;

    // Check user's premium status and messages
    const userRef = doc(db, 'users', currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      const data = doc.data();
      if (data?.isPremium) {
        setIsApproved(true);
        setAdminChecked(true);
      } else if (data?.premiumStatus === 'rejected') {
        setIsApproved(false);
        setAdminChecked(true);
      }
      
      // Load messages if they exist
      if (data?.premiumMessages) {
        setMessages(data.premiumMessages.map((msg: any) => ({
          id: msg.id,
          text: msg.text,
          sender: msg.sender,
          timestamp: new Date(msg.timestamp?.seconds * 1000)
        })).sort((a: PremiumMessage, b: PremiumMessage) => 
          a.timestamp.getTime() - b.timestamp.getTime()
        ));
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  useEffect(() => {
    if (!submitted || adminChecked) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, adminChecked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) {
      toast.error('Please enter your transaction ID');
      return;
    }
    
    try {
      const userRef = doc(db, 'users', currentUser?.uid);
      await updateDoc(userRef, {
        transactionId,
        premiumStatus: 'pending',
        premiumMessages: [
          {
            id: Date.now().toString(),
            text: `User submitted transaction ID: ${transactionId}`,
            sender: 'user',
            timestamp: new Date()
          }
        ]
      });
      setSubmitted(true);
      setMessages([{
        id: Date.now().toString(),
        text: `User submitted transaction ID: ${transactionId}`,
        sender: 'user',
        timestamp: new Date()
      }]);
    } catch (error) {
      toast.error('Failed to submit transaction ID');
      console.error(error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !currentUser?.uid) return;
    
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      const newMsg = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user' as const,
        timestamp: new Date()
      };
      
      await updateDoc(userRef, {
        premiumMessages: [...messages, newMsg]
      });
      
      setNewMessage('');
    } catch (error) {
      toast.error('Failed to send message');
      console.error(error);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2">Go Premium</h1>
              <p className="text-purple-600 mb-6 sm:mb-8">
                Unlock all premium features and content
              </p>
            </div>

            {!submitted ? (
              <div className="space-y-6">
                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <h2 className="text-lg font-medium text-gray-800">Choose Payment Method</h2>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setActivePaymentMethod('telebirr')}
                      className={`p-3 rounded-lg border flex flex-col items-center ${activePaymentMethod === 'telebirr' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}
                    >
                      <Smartphone className="h-6 w-6 text-purple-600 mb-1" />
                      <span className="text-sm font-medium">Telebirr</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePaymentMethod('ebirr')}
                      className={`p-3 rounded-lg border flex flex-col items-center ${activePaymentMethod === 'ebirr' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}
                    >
                      <Smartphone className="h-6 w-6 text-blue-600 mb-1" />
                      <span className="text-sm font-medium">Ebirr</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePaymentMethod('cbe')}
                      className={`p-3 rounded-lg border flex flex-col items-center ${activePaymentMethod === 'cbe' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}
                    >
                      <Banknote className="h-6 w-6 text-green-600 mb-1" />
                      <span className="text-sm font-medium">CBE</span>
                    </button>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {activePaymentMethod === 'telebirr' && (
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-800 flex items-center">
                        <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
                        Telebirr Payment
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                        <li>Open your Telebirr app</li>
                        <li>Go to Send Money</li>
                        <li>Enter phone number: <span className="font-mono font-medium">+251994024681</span></li>
                        <li>Enter amount: <span className="font-mono font-medium">ETB 100</span></li>
                        <li>Complete the transaction</li>
                      </ol>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mt-2">
                        <span className="font-mono">+251994024681</span>
                        <button 
                          onClick={() => copyToClipboard('+251994024681')}
                          className="text-purple-600 hover:text-purple-800 flex items-center"
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </button>
                      </div>
                    </div>
                  )}

                  {activePaymentMethod === 'ebirr' && (
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-800 flex items-center">
                        <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                        Ebirr Payment
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                        <li>Open your Ebirr app</li>
                        <li>Go to Send Money</li>
                        <li>Enter phone number: <span className="font-mono font-medium">+251994024681</span></li>
                        <li>Enter amount: <span className="font-mono font-medium">ETB 100</span></li>
                        <li>Complete the transaction</li>
                      </ol>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mt-2">
                        <span className="font-mono">+251994024681</span>
                        <button 
                          onClick={() => copyToClipboard('+251994024681')}
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </button>
                      </div>
                    </div>
                  )}

                  {activePaymentMethod === 'cbe' && (
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-800 flex items-center">
                        <Banknote className="h-5 w-5 text-green-600 mr-2" />
                        Commercial Bank of Ethiopia
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                        <li>Open your CBE mobile banking or visit a branch</li>
                        <li>Go to Transfer Money</li>
                        <li>Enter account number: <span className="font-mono font-medium">1000611141657</span></li>
                        <li>Enter amount: <span className="font-mono font-medium">ETB 100</span></li>
                        <li>Complete the transaction</li>
                      </ol>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mt-2">
                        <span className="font-mono">1000611141657</span>
                        <button 
                          onClick={() => copyToClipboard('1000611141657')}
                          className="text-green-600 hover:text-green-800 flex items-center"
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transaction ID Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter Your Transaction ID
                    </label>
                    <input
                      type="text"
                      id="transactionId"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="block w-full px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder={`e.g. ${activePaymentMethod === 'cbe' ? 'CBE' : activePaymentMethod.toUpperCase()}123456789`}
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Find this in your {activePaymentMethod} transaction history
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Submit Payment
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-6">
                {!adminChecked ? (
                  <>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full">
                        <Clock className="h-12 w-12 text-purple-600" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Processing Your Request</h2>
                      <p className="text-gray-600">
                        Our team is verifying your transaction. This usually takes up to 7 hours.
                      </p>
                      
                      <div className="py-4 sm:py-6">
                        <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">
                          {formatTime(timeLeft)}
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Time remaining for verification
                        </div>
                      </div>
                    </div>

                    {/* Chat Interface */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                        <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                        Premium Approval Chat
                      </h3>
                      
                      <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                        {messages.length > 0 ? (
                          messages.map((message) => (
                            <div 
                              key={message.id}
                              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' 
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
                            No messages yet. Admin will contact you here if needed.
                          </p>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <button
                          onClick={sendMessage}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                ) : isApproved ? (
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Congratulations, {currentUser?.displayName || 'User'}!
                    </h2>
                    <p className="text-gray-600">
                      You are now a premium member. Enjoy all the exclusive features!
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <button
                        onClick={() => window.location.href = '/'}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                      >
                        Start Exploring
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full">
                      <AlertCircle className="h-12 w-12 text-red-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Verification Failed</h2>
                    <p className="text-gray-600">
                      We couldn't verify your transaction. Please contact admin for assistance.
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700 font-medium">+251994024681</span>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}