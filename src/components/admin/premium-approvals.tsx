import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, onSnapshot, doc, updateDoc, orderBy } from 'firebase/firestore'; // Import onSnapshot and orderBy
import { CheckCircle2, XCircle, RefreshCw, User, Shield } from 'lucide-react';
import { toast } from 'react-hot-toast'; // Import toast for notifications

interface UserData {
  id: string;
  displayName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  transactionId?: string;
  paymentMethod?: string; // New field
  submittedAt?: Date; // New field
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'premium' | 'rejected'>('pending'); // Added 'rejected' filter

  useEffect(() => {
    setLoading(true);
    // Listen for real-time updates on the 'users' collection, ordered by submittedAt for pending requests
    const usersQuery = query(collection(db, 'users'), orderBy('submittedAt', 'desc'));

    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const usersData: UserData[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        usersData.push({
          id: doc.id,
          displayName: data.displayName || 'No Name',
          email: data.email,
          isPremium: data.isPremium || false,
          premiumStatus: data.premiumStatus || 'pending',
          transactionId: data.transactionId,
          paymentMethod: data.paymentMethod,
          submittedAt: data.submittedAt ? data.submittedAt.toDate() : undefined, // Convert timestamp to Date object
        });
      });
      setUsers(usersData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching real-time users:", error);
      toast.error("Failed to load user data in real-time.");
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const handleApprove = async (userId: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: true,
        premiumStatus: 'approved',
        transactionId: null, // Clear transaction ID after approval if desired
        submittedAt: null, // Clear submission timestamp
      });
      toast.success('User premium request approved!');
      // State will be updated automatically by the onSnapshot listener
    } catch (error) {
      console.error('Error approving user:', error);
      toast.error('Failed to approve user premium.');
    }
  };

  const handleReject = async (userId: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isPremium: false,
        premiumStatus: 'rejected',
        transactionId: null, // Clear transaction ID after rejection if desired
        submittedAt: null, // Clear submission timestamp
      });
      toast.error('User premium request rejected!');
      // State will be updated automatically by the onSnapshot listener
    } catch (error) {
      console.error('Error rejecting user:', error);
      toast.error('Failed to reject user premium.');
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'pending') return user.premiumStatus === 'pending';
    if (filter === 'premium') return user.isPremium;
    if (filter === 'rejected') return user.premiumStatus === 'rejected';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-purple-800 to-indigo-800">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white">Premium User Management</h1>
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
                  onClick={() => setFilter('rejected')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${filter === 'rejected' ? 'bg-white text-purple-800' : 'text-white hover:bg-purple-700'}`}
                >
                  Rejected
                </button>
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${filter === 'all' ? 'bg-white text-purple-800' : 'text-white hover:bg-purple-700'}`}
                >
                  All Users
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center p-12">
                <RefreshCw className="h-8 w-8 text-purple-600 animate-spin" />
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted At
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className={`${user.premiumStatus === 'pending' ? 'bg-yellow-50' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.displayName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.isPremium 
                              ? 'bg-green-100 text-green-800' 
                              : user.premiumStatus === 'pending' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {user.isPremium ? 'Premium' : user.premiumStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">
                          {user.transactionId || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.paymentMethod || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.submittedAt ? user.submittedAt.toLocaleString() : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {user.premiumStatus === 'pending' && (
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleApprove(user.id)}
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm"
                                title="Approve"
                              >
                                <CheckCircle2 className="h-5 w-5 mr-1" /> Approve
                              </button>
                              <button
                                onClick={() => handleReject(user.id)}
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                                title="Reject"
                              >
                                <XCircle className="h-5 w-5 mr-1" /> Reject
                              </button>
                            </div>
                          )}
                          {user.premiumStatus === 'approved' && (
                            <span className="text-green-600 flex justify-end items-center">
                              <CheckCircle2 className="h-5 w-5 mr-1" /> Approved
                            </span>
                          )}
                           {user.premiumStatus === 'rejected' && (
                            <span className="text-red-600 flex justify-end items-center">
                              <XCircle className="h-5 w-5 mr-1" /> Rejected
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                        No users found with the current filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Premium Users</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {users.filter(u => u.isPremium).length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Pending Approvals</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {users.filter(u => u.premiumStatus === 'pending').length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                    <XCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Rejected Requests</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {users.filter(u => u.premiumStatus === 'rejected').length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}