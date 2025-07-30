import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { CheckCircle2, XCircle, RefreshCw, User, Shield } from 'lucide-react';

interface UserData {
  id: string;
  displayName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  transactionId?: string;
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'premium'>('pending');

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
            transactionId: data.transactionId
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
        premiumStatus: 'approved'
      });
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPremium: true, premiumStatus: 'approved' } : user
      ));
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (userId: string) => {
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
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id}>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.transactionId || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {user.premiumStatus === 'pending' && (
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleApprove(user.id)}
                                className="text-green-600 hover:text-green-900"
                              >
                                <CheckCircle2 className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => handleReject(user.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <XCircle className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}