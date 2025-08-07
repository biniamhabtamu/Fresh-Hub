import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, getDocs, doc, updateDoc } from 'firebase/firestore';
import { CheckCircle2, XCircle, RefreshCw, User, Shield, Loader2, Link } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tailwind CSS classes for better readability and a clean design
const containerClasses = "min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8";
const cardClasses = "bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.02] duration-300 ease-in-out";
const headerClasses = "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8";
const titleClasses = "text-3xl font-extrabold text-gray-900";
const filterButtonClasses = "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200";

interface UserData {
  id: string;
  displayName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  transactionId?: string;
  transactionUrl?: string; // Added new field for the URL
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'premium'>('pending');
  const [isUpdating, setIsUpdating] = useState(false);

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
            displayName: data.displayName || 'No Name',
            email: data.email,
            isPremium: data.isPremium || false,
            premiumStatus: data.premiumStatus || 'pending',
            transactionId: data.transactionId,
            transactionUrl: data.transactionUrl // Fetch the new `transactionUrl` field
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
        premiumStatus: 'approved'
      });
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPremium: true, premiumStatus: 'approved' } : user
      ));
    } catch (error) {
      console.error('Error approving user:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleReject = async (userId: string) => {
    setIsUpdating(true);
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: false,
        premiumStatus: 'rejected'
      });
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPremium: false, premiumStatus: 'rejected' } : user
      ));
    } catch (error) {
      console.error('Error rejecting user:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'pending') return user.premiumStatus === 'pending';
    if (filter === 'premium') return user.isPremium;
    return true;
  });

  const getStatusBadge = (user: UserData) => {
    if (user.isPremium) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Premium
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
      value: users.filter(u => u.isPremium).length,
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
          <h1 className={titleClasses}>Admin Dashboard</h1>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setFilter('pending')}
              className={`${filterButtonClasses} ${filter === 'pending' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('premium')}
              className={`${filterButtonClasses} ${filter === 'premium' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Premium
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`${filterButtonClasses} ${filter === 'all' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              All Users
            </button>
          </div>
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
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Transaction URL
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
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
                                  <div className="text-sm font-medium text-gray-900">{user.displayName}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(user)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {user.transactionId || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {user.transactionUrl ? (
                                <a 
                                  href={user.transactionUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  <Link className="h-4 w-4 mr-1" />
                                  View Screenshot
                                </a>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              {user.premiumStatus === 'pending' && (
                                <div className="flex justify-end space-x-2">
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
                                </div>
                              )}
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
                            No users found for this filter.
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
                                <div className="text-base font-semibold text-gray-900">{user.displayName}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                            {getStatusBadge(user)}
                          </div>
                          
                          {user.premiumStatus === 'pending' && (
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleApprove(user.id)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isUpdating}
                              >
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(user.id)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isUpdating}
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </button>
                            </div>
                          )}
                          <div className="text-sm text-gray-500 flex items-center">
                            <span className="font-semibold text-gray-900 mr-2">Transaction ID:</span>
                            {user.transactionId || 'N/A'}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <span className="font-semibold text-gray-900 mr-2">Transaction URL:</span>
                            {user.transactionUrl ? (
                              <a href={user.transactionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                                <Link className="h-4 w-4 mr-1" />
                                View Screenshot
                              </a>
                            ) : (
                              'N/A'
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-12 text-center text-gray-500">
                        No users found for this filter.
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card, index) => (
            <div key={index} className={cardClasses}>
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-full p-4 ${card.bgColor}`}>
                  {card.icon}
                </div>
                <div className="ml-5 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">{card.title}</dt>
                  <dd className="text-3xl font-bold text-gray-900">{card.value}</dd>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}