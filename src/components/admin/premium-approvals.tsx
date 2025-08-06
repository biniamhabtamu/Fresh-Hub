import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, onSnapshot, doc, updateDoc, orderBy } from 'firebase/firestore';
import { 
  CheckCircle2, XCircle, RefreshCw, User, Shield, Eye, Search, X,
  CreditCard, Smartphone, Book, Award, BarChart, Headphones, Download
} from 'lucide-react';
import { toast } from 'react-hot-toast';

interface UserData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  field: 'natural' | 'social';
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  screenshotUrl?: string;
  submittedAt?: Date;
  paymentMethod?: 'ebirr' | 'telebirr';
  transactionId?: string;
  createdAt: Date;
}

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    let usersQuery;

    if (filter === "pending") {
      usersQuery = query(
        collection(db, "users"),
        where("premiumStatus", "==", "pending"),
        where("screenshotUrl", "!=", null),
        orderBy("submittedAt", "desc")
      );
    } else if (filter === "approved") {
      usersQuery = query(
        collection(db, "users"),
        where("premiumStatus", "==", "approved"),
        orderBy("submittedAt", "desc")
      );
    } else if (filter === "rejected") {
      usersQuery = query(
        collection(db, "users"),
        where("premiumStatus", "==", "rejected"),
        orderBy("submittedAt", "desc")
      );
    } else {
      usersQuery = query(
        collection(db, "users"),
        orderBy("submittedAt", "desc")
      );
    }

    const unsubscribe = onSnapshot(
      usersQuery,
      (snapshot) => {
        const usersData: UserData[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          usersData.push({
            id: doc.id,
            fullName: data.fullName || "No Name",
            email: data.email || "No Email",
            phone: data.phone || "No Phone",
            field: data.field || 'natural',
            isPremium: data.isPremium || false,
            premiumStatus: data.premiumStatus || "pending",
            screenshotUrl: data.screenshotUrl,
            submittedAt: data.submittedAt?.toDate(),
            paymentMethod: data.paymentMethod,
            transactionId: data.transactionId,
            createdAt: data.createdAt?.toDate() || new Date()
          });
        });
        setUsers(usersData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching users:", error);
        toast.error("Failed to load user data");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [filter]);

  const handleApprove = async (userId: string) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        isPremium: true,
        premiumStatus: "approved",
        approvedAt: new Date(),
      });
      toast.success("Premium access approved successfully!");
    } catch (error) {
      console.error("Error approving premium:", error);
      toast.error("Failed to approve premium access");
    }
  };

  const handleReject = async (userId: string) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        isPremium: false,
        premiumStatus: "rejected",
        rejectedAt: new Date(),
      });
      toast.success("Premium request rejected");
    } catch (error) {
      console.error("Error rejecting premium:", error);
      toast.error("Failed to reject premium request");
    }
  };

  const filteredUsers = users.filter(user => 
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pendingCount = users.filter(u => u.premiumStatus === "pending" && u.screenshotUrl).length;
  const approvedCount = users.filter(u => u.premiumStatus === "approved").length;
  const rejectedCount = users.filter(u => u.premiumStatus === "rejected").length;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-purple-800 to-indigo-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-semibold text-white mb-4 sm:mb-0">Premium User Management</h1>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex space-x-1">
                  <button
                    onClick={() => setFilter("pending")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      filter === "pending" ? "bg-white text-purple-800" : "text-white hover:bg-purple-700"
                    }`}
                  >
                    Pending ({pendingCount})
                  </button>
                  <button
                    onClick={() => setFilter("approved")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      filter === "approved" ? "bg-white text-purple-800" : "text-white hover:bg-purple-700"
                    }`}
                  >
                    Approved ({approvedCount})
                  </button>
                  <button
                    onClick={() => setFilter("rejected")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      filter === "rejected" ? "bg-white text-purple-800" : "text-white hover:bg-purple-700"
                    }`}
                  >
                    Rejected ({rejectedCount})
                  </button>
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      filter === "all" ? "bg-white text-purple-800" : "text-white hover:bg-purple-700"
                    }`}
                  >
                    All Users ({users.length})
                  </button>
                </div>
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
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Field
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Proof
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className={user.premiumStatus === "pending" ? "bg-yellow-50" : ""}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.field === 'natural' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {user.field === 'natural' ? 'Natural' : 'Social'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.paymentMethod ? (
                            <div className="flex items-center">
                              {user.paymentMethod === 'ebirr' ? (
                                <>
                                  <CreditCard className="h-4 w-4 text-blue-500 mr-1" />
                                  <span>Ebirr</span>
                                </>
                              ) : (
                                <>
                                  <Smartphone className="h-4 w-4 text-green-500 mr-1" />
                                  <span>Telebirr</span>
                                </>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.isPremium
                              ? "bg-green-100 text-green-800"
                              : user.premiumStatus === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}>
                            {user.isPremium ? "Premium" : user.premiumStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.screenshotUrl ? (
                            <div className="flex items-center space-x-2">
                              <div className="relative">
                                {imageLoading === user.screenshotUrl && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
                                    <RefreshCw className="h-4 w-4 animate-spin text-gray-400" />
                                  </div>
                                )}
                                <img
                                  src={user.screenshotUrl}
                                  alt="Payment screenshot"
                                  className="h-12 w-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => setSelectedImage(user.screenshotUrl!)}
                                  onLoad={() => setImageLoading(null)}
                                  onError={() => setImageLoading(null)}
                                  onLoadStart={() => setImageLoading(user.screenshotUrl!)}
                                />
                              </div>
                              <button
                                onClick={() => setSelectedImage(user.screenshotUrl!)}
                                className="text-purple-600 hover:text-purple-800 flex items-center text-sm"
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </button>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">No image</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.submittedAt ? user.submittedAt.toLocaleString() : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {user.premiumStatus === "pending" && (
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleApprove(user.id)}
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm"
                                title="Approve"
                              >
                                <CheckCircle2 className="h-4 w-4 mr-1" /> Approve
                              </button>
                              <button
                                onClick={() => handleReject(user.id)}
                                className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                                title="Reject"
                              >
                                <XCircle className="h-4 w-4 mr-1" /> Reject
                              </button>
                            </div>
                          )}
                          {user.premiumStatus === "approved" && (
                            <span className="text-green-600 flex justify-end items-center">
                              <CheckCircle2 className="h-4 w-4 mr-1" /> Approved
                            </span>
                          )}
                          {user.premiumStatus === "rejected" && (
                            <span className="text-red-600 flex justify-end items-center">
                              <XCircle className="h-4 w-4 mr-1" /> Rejected
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                        No users found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Statistics Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 p-6">
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
                          {approvedCount}
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
                          {pendingCount}
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
                          {rejectedCount}
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white p-2 rounded-lg">
              <img
                src={selectedImage}
                alt="Payment screenshot full view"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-2 text-sm text-gray-500 text-center">
                Payment confirmation screenshot
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}