import React, { useState, useEffect } from 'react'; 
import { db } from '../../firebase/config';
import { collection, query, getDocs, doc, updateDoc } from 'firebase/firestore';
import { CheckCircle2, XCircle, RefreshCw, User, Shield, Loader2, Link, Mail, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const containerClasses = "min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8";
const cardClasses = "bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.02] duration-300 ease-in-out";
const headerClasses = "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8";
const titleClasses = "text-3xl font-extrabold text-gray-900";
const filterButtonClasses = "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200";

interface UserData {
  id: string;
  fullName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
 
  field?: string;
  phone?: string;
  paymentAmount?: number;
  paymentDate?: string;
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const usersQuery = query(collection(db, 'users'));
        const querySnapshot = await getDocs(usersQuery);

        const usersData: UserData[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            fullName: data.fullName || 'No Name',
            email: data.email,
            isPremium: data.isPremium || false,
            premiumStatus: data.premiumStatus || 'pending',
            field: data.field || '',
            phone: data.phone || '',
            transactionId: data.transactionId || '',
            transactionUrl: data.transactionUrl || '',
            paymentAmount: data.paymentAmount || 0,
            paymentDate: data.paymentDate || '',
          };
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
    setIsUpdating(true);
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: true,
        premiumStatus: 'approved',
        premiumSince: new Date().toISOString()
      });
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: true, 
          premiumStatus: 'approved' 
        } : user
      ));
    } catch (error) {
      console.error('Error approving user:', error);
      alert("Failed to approve user. See console for details.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleReject = async (userId: string) => {
    setIsUpdating(true);
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: false,
        premiumStatus: 'rejected',
        premiumSince: null
      });
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: false, 
          premiumStatus: 'rejected' 
        } : user
      ));
    } catch (error) {
      console.error('Error rejecting user:', error);
      alert("Failed to reject user. See console for details.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleViewDetails = (user: UserData) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'pending') return user.premiumStatus === 'pending';
    if (filter === 'approved') return user.premiumStatus === 'approved';
    if (filter === 'rejected') return user.premiumStatus === 'rejected';
    return true;
  });

  const getStatusBadge = (user: UserData) => {
    if (user.isPremium && user.premiumStatus === 'approved') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Approved
        </span>
      );
    }
    switch (user.premiumStatus) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
            <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
            Pending
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-800">
            <User className="h-3 w-3 mr-1" />
            Basic
          </span>
        );
    }
  };

  const dashboardCards = [
    {
      title: "Total Premium Users",
      value: users.filter(u => u.isPremium && u.premiumStatus === 'approved').length,
      icon: <Shield className="h-6 w-6 text-white" />,
      bgColor: "bg-indigo-500"
    },
    {
      title: "Pending Approvals",
      value: users.filter(u => u.premiumStatus === 'pending').length,
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      bgColor: "bg-yellow-500"
    },
    {
      title: "Rejected Requests",
      value: users.filter(u => u.premiumStatus === 'rejected').length,
      icon: <XCircle className="h-6 w-6 text-white" />,
      bgColor: "bg-red-500"
    }
  ];

  return (
    <div className={containerClasses}>
      <div className="max-w-7xl mx-auto">
        <div className={headerClasses}>
          <h1 className={titleClasses}>Premium Approval Dashboard</h1>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setFilter('pending')}
              className={`${filterButtonClasses} ${filter === 'pending' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`${filterButtonClasses} ${filter === 'approved' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`${filterButtonClasses} ${filter === 'rejected' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Rejected
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`${filterButtonClasses} ${filter === 'all' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              All Users
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {dashboardCards.map((card, index) => (
            <motion.div 
              key={index} 
              className={cardClasses}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-full p-4 ${card.bgColor}`}>
                  {card.icon}
                </div>
                <div className="ml-5 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">{card.title}</dt>
                  <dd className="text-3xl font-bold text-gray-900">{card.value}</dd>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-12">
          {loading ? (
            <div className="flex justify-center items-center p-20">
              <Loader2 className="h-10 w-10 text-indigo-500 animate-spin" />
            </div>
          ) : (
            <>
              {/* Desktop View */}
              <div className="hidden md:block">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Payment</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <AnimatePresence>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <motion.tr
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <User className="h-5 w-5 text-indigo-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                                  <div className="text-sm text-gray-500">{user.field}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-col space-y-1">
                                <div className="flex items-center text-sm text-gray-600">
                                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                  {user.email}
                                </div>
                                {user.phone && (
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                    {user.phone}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(user)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-col space-y-1">
                                {user.transactionId && (
                                  <div className="text-sm text-gray-600">
                                    <span className="font-medium">ID:</span> {user.transactionId}
                                  </div>
                                )}
                                {user.paymentAmount && (
                                  <div className="text-sm text-gray-600">
                                    <span className="font-medium">Amount:</span> {user.paymentAmount} birr
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() => handleViewDetails(user)}
                                  className="p-2 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                                >
                                  <FileText className="h-5 w-5" />
                                </button>
                                {user.premiumStatus === 'pending' && (
                                  <>
                                    <button
                                      onClick={() => handleApprove(user.id)}
                                      className="p-2 rounded-full text-green-600 hover:bg-green-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                      disabled={isUpdating}
                                    >
                                      <CheckCircle2 className="h-5 w-5" />
                                    </button>
                                    <button
                                      onClick={() => handleReject(user.id)}
                                      className="p-2 rounded-full text-red-600 hover:bg-red-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                      disabled={isUpdating}
                                    >
                                      <XCircle className="h-5 w-5" />
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-500">
                            No users found matching the current filter.
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
              
              {/* Mobile View */}
              <div className="md:hidden">
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <motion.div
                          key={user.id}
                          className="p-4 flex flex-col space-y-4 hover:bg-gray-50 transition-colors duration-150"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-indigo-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-base font-semibold text-gray-900">{user.fullName}</div>
                                <div className="text-sm text-gray-500">{user.field}</div>
                              </div>
                            </div>
                            {getStatusBadge(user)}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="h-4 w-4 mr-2 text-gray-400" />
                              {user.email}
                            </div>
                            {user.phone && (
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                {user.phone}
                              </div>
                            )}
                            {user.transactionId && (
                              <div className="flex items-center text-sm text-gray-600 col-span-2">
                                <span className="font-medium mr-2">Transaction ID:</span>
                                {user.transactionId}
                              </div>
                            )}
                            {user.paymentAmount && (
                              <div className="flex items-center text-sm text-gray-600">
                                <span className="font-medium mr-2">Amount:</span>
                                {user.paymentAmount} birr
                              </div>
                            )}
                          </div>
                          
                          <div className="flex justify-between pt-2">
                            <button
                              onClick={() => handleViewDetails(user)}
                              className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <FileText className="h-4 w-4 mr-1" />
                              Details
                            </button>
                            
                            {user.premiumStatus === 'pending' && (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleApprove(user.id)}
                                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={isUpdating}
                                >
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleReject(user.id)}
                                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={isUpdating}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-12 text-center text-gray-500">
                        No users found matching the current filter.
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* User Details Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedUser.fullName}</h2>
                  <p className="text-gray-600">{selectedUser.field}</p>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">User Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-700">{selectedUser.email}</span>
                    </div>
                    {selectedUser.phone && (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700">{selectedUser.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-700">
                        Status: {getStatusBadge(selectedUser)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Details</h3>
                  <div className="space-y-2">
                    {selectedUser.transactionId && (
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700">
                          Transaction ID: {selectedUser.transactionId}
                        </span>
                      </div>
                    )}
                    {selectedUser.paymentAmount && (
                      <div className="flex items-center">
                        <span className="text-gray-700">
                          Amount Paid: {selectedUser.paymentAmount} birr
                        </span>
                      </div>
                    )}
                    {selectedUser.paymentDate && (
                      <div className="flex items-center">
                        <span className="text-gray-700">
                          Date: {new Date(selectedUser.paymentDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedUser.transactionUrl && (
                      <div className="pt-2">
                        <a 
                          href={selectedUser.transactionUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:underline"
                        >
                          <Link className="h-4 w-4 mr-1" />
                          View Payment Screenshot
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {selectedUser.premiumStatus === 'pending' && (
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      handleReject(selectedUser.id);
                      setShowModal(false);
                    }}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                    disabled={isUpdating}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => {
                      handleApprove(selectedUser.id);
                      setShowModal(false);
                    }}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                    disabled={isUpdating}
                  >
                    Approve
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}