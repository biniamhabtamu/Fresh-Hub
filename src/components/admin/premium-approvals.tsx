import React, { useState, useEffect } from 'react'; 
import { db } from '../../firebase/config';
import { collection, query, getDocs, doc, updateDoc } from 'firebase/firestore';
import { 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  User, 
  Shield, 
  Loader2, 
  Link, 
  Mail, 
  Phone, 
  FileText, 
  Gift,
  Filter,
  ChevronDown,
  ChevronUp,
  Calendar,
  Clock,
  AlertCircle,
  Info,
  BadgeCheck,
  Ban,
  Users,
  Search,
  BarChart2,
  CreditCard,
  Download,
  MoreVertical,
  Star,
  TrendingUp,
  ShieldCheck,
  BadgeDollarSign,
  Activity,
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Chart } from 'react-google-charts';

interface UserData {
  id: string;
  fullName: string;
  email: string;
  isPremium: boolean;
  premiumStatus: 'pending' | 'approved' | 'rejected';
  field?: string;
  phone?: string;
  referralCode?: string;
  paymentAmount?: number;
  paymentDate?: string;
  transactionId?: string;
  transactionUrl?: string;
  premiumSince?: string;
  lastActive?: string;
  referredBy?: string;
  signupDate?: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatLastActive = (dateString?: string) => {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export default function AdminPremiumApproval() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<'approvals' | 'analytics'>('approvals');
  const [exportLoading, setExportLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Calculate referral counts and revenue
  const referralStats = users.reduce((acc, user) => {
    if (user.referredBy) {
      if (!acc[user.referredBy]) {
        acc[user.referredBy] = { count: 0, revenue: 0 };
      }
      acc[user.referredBy].count += 1;
      acc[user.referredBy].revenue += user.paymentAmount || 0;
    }
    return acc;
  }, {} as Record<string, { count: number, revenue: number }>);

  // Calculate total revenue
  const totalRevenue = users.reduce((sum, user) => {
    if (user.isPremium && user.premiumStatus === 'approved') {
      return sum + (user.paymentAmount || 0);
    }
    return sum;
  }, 0);

  // Calculate revenue from referrals
  const referralRevenue = Object.values(referralStats).reduce((sum, stat) => sum + stat.revenue, 0);

  // Calculate revenue trends (last 7 days)
  const getRevenueTrend = () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const dailyRevenue: Record<string, number> = {};
    
    users.forEach(user => {
      if (user.premiumStatus === 'approved' && user.paymentDate) {
        const paymentDate = new Date(user.paymentDate);
        if (paymentDate >= sevenDaysAgo) {
          const dateKey = paymentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          dailyRevenue[dateKey] = (dailyRevenue[dateKey] || 0) + (user.paymentAmount || 0);
        }
      }
    });
    
    return Object.entries(dailyRevenue).map(([date, revenue]) => [date, revenue]);
  };

  // Calculate status distribution for chart
  const getStatusDistribution = () => {
    const counts = {
      approved: users.filter(u => u.premiumStatus === 'approved').length,
      pending: users.filter(u => u.premiumStatus === 'pending').length,
      rejected: users.filter(u => u.premiumStatus === 'rejected').length,
      basic: users.filter(u => !u.isPremium && !u.premiumStatus).length
    };
    
    return [
      ['Status', 'Count'],
      ['Approved', counts.approved],
      ['Pending', counts.pending],
      ['Rejected', counts.rejected],
      ['Basic', counts.basic]
    ];
  };

  // Calculate payment method distribution (simplified)
  const getPaymentMethodDistribution = () => {
    // In a real app, you'd track actual payment methods
    // This is a simplified version assuming all are mobile payments
    return [
      ['Method', 'Count'],
      ['Mobile Payment', users.filter(u => u.premiumStatus === 'approved').length],
      ['Other', 0]
    ];
  };

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
            referralCode: data.referralCode || '',
            referredBy: data.referredBy || '',
            paymentAmount: data.paymentAmount || 0,
            paymentDate: data.paymentDate || '',
            transactionId: data.transactionId || '',
            transactionUrl: data.transactionUrl || '',
            premiumSince: data.premiumSince || '',
            lastActive: data.lastActive ? formatLastActive(data.lastActive.toDate?.() || data.lastActive) : '',
            signupDate: data.signupDate || ''
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
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isPremium: true,
        premiumStatus: 'approved',
        premiumSince: new Date().toISOString()
      });
      
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: true, 
          premiumStatus: 'approved',
          premiumSince: new Date().toISOString()
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
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isPremium: false,
        premiumStatus: 'rejected',
        premiumSince: null
      });
      
      setUsers(users.map(user => 
        user.id === userId ? { 
          ...user, 
          isPremium: false, 
          premiumStatus: 'rejected',
          premiumSince: ''
        } : user
      ));
    } catch (error) {
      console.error('Error rejecting user:', error);
      alert("Failed to reject user. See console for details.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleExportData = async () => {
    setExportLoading(true);
    try {
      // In a real app, you would generate a CSV or Excel file here
      // For now, we'll just simulate the export
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Export completed! Data would be downloaded in a real implementation.');
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. See console for details.');
    } finally {
      setExportLoading(false);
    }
  };

  const handleViewDetails = (user: UserData) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const filteredUsers = users.filter(user => {
    // Filter by status
    if (filter !== 'all' && user.premiumStatus !== filter) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        user.fullName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        (user.phone?.toLowerCase().includes(query) ?? false) ||
        (user.transactionId?.toLowerCase().includes(query) ?? false) ||
        (user.referralCode?.toLowerCase().includes(query) ?? false) ||
        (user.referredBy?.toLowerCase().includes(query) ?? false)
      );
    }
    
    return true;
  });

  const getStatusBadge = (user: UserData) => {
    if (user.isPremium && user.premiumStatus === 'approved') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <BadgeCheck className="h-3 w-3 mr-1" />
          Approved
        </span>
      );
    }
    switch (user.premiumStatus) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <Ban className="h-3 w-3 mr-1" />
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
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
      icon: <ShieldCheck className="h-5 w-5 text-white" />,
      bgColor: "bg-indigo-600",
      trend: "up",
      change: "+12% from last week"
    },
    {
      title: "Pending Approvals",
      value: users.filter(u => u.premiumStatus === 'pending').length,
      icon: <RefreshCw className="h-5 w-5 text-white" />,
      bgColor: "bg-yellow-500",
      trend: "neutral",
      change: "3 new today"
    },
    {
      title: "Referral Signups",
      value: Object.keys(referralStats).length > 0 ? 
        `${Object.keys(referralStats).length} codes (${Object.values(referralStats).reduce((sum, stat) => sum + stat.count, 0)} users)` : 
        "No referrals",
      icon: <Users className="h-5 w-5 text-white" />,
      bgColor: "bg-purple-600",
      trend: "up",
      change: "Generating 35% of signups"
    },
    {
      title: "Total Revenue",
      value: totalRevenue,
      icon: <BadgeDollarSign className="h-5 w-5 text-white" />,
      bgColor: "bg-green-600",
      trend: "up",
      subtitle: referralRevenue > 0 ? `(Referral: ${referralRevenue} ETB)` : '',
      change: "+24% from last month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Premium Membership Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage premium memberships, view analytics, and track revenue
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleExportData}
              disabled={exportLoading}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            >
              {exportLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              <span>Export</span>
            </button>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Mobile filter toggle */}
            {isMobile && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('approvals')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'approvals' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Approvals
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'analytics' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Analytics
          </button>
        </div>

        {/* Filter buttons - desktop or expanded mobile */}
        <div className={`${isMobile ? (showFilters ? 'block' : 'hidden') : 'flex'} flex-wrap gap-2 mb-6`}>
          {(['pending', 'approved', 'rejected', 'all'] as const).map((f) => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === f 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f === 'pending' ? 'Pending' : 
               f === 'approved' ? 'Approved' : 
               f === 'rejected' ? 'Rejected' : 'All Users'}
            </motion.button>
          ))}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {dashboardCards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${card.bgColor}`}>
                    {card.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{card.title}</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
                    </p>
                    {card.subtitle && (
                      <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
                    )}
                  </div>
                </div>
                {card.change && (
                  <div className={`mt-2 text-xs font-medium flex items-center ${
                    card.trend === 'up' ? 'text-green-600' : 
                    card.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {card.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : 
                     card.trend === 'down' ? '↓' : '→'}
                    {card.change}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {activeTab === 'analytics' ? (
          <div className="space-y-6">
            {/* Revenue Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-indigo-600" />
                  Revenue Trend (Last 7 Days)
                </h3>
              </div>
              <div className="h-64">
                <Chart
                  chartType="AreaChart"
                  loader={<div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin text-gray-400" /></div>}
                  data={[
                    ['Date', 'Revenue'],
                    ...getRevenueTrend()
                  ]}
                  options={{
                    title: '',
                    hAxis: { title: 'Date' },
                    vAxis: { title: 'Revenue (ETB)' },
                    colors: ['#4f46e5'],
                    legend: 'none',
                    animation: {
                      startup: true,
                      easing: 'linear',
                      duration: 500,
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Status Distribution */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                    User Status Distribution
                  </h3>
                </div>
                <div className="h-64">
                  <Chart
                    chartType="PieChart"
                    loader={<div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin text-gray-400" /></div>}
                    data={getStatusDistribution()}
                    options={{
                      title: '',
                      pieHole: 0.4,
                      colors: ['#10b981', '#f59e0b', '#ef4444', '#9ca3af'],
                      legend: { position: 'labeled' },
                      pieSliceText: 'value',
                      animation: {
                        startup: true,
                        easing: 'linear',
                        duration: 500,
                      },
                    }}
                  />
                </div>
              </div>

              {/* Payment Method Distribution */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                    Payment Methods
                  </h3>
                </div>
                <div className="h-64">
                  <Chart
                    chartType="BarChart"
                    loader={<div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin text-gray-400" /></div>}
                    data={getPaymentMethodDistribution()}
                    options={{
                      title: '',
                      colors: ['#3b82f6', '#9ca3af'],
                      legend: { position: 'none' },
                      animation: {
                        startup: true,
                        easing: 'linear',
                        duration: 500,
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Referral Codes Summary */}
            {Object.keys(referralStats).length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <Gift className="h-5 w-5 mr-2 text-purple-600" />
                    Top Referral Codes
                  </h3>
                  <span className="text-sm text-gray-500">
                    Showing {Math.min(5, Object.keys(referralStats).length)} of {Object.keys(referralStats).length}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referral Code</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(referralStats)
                        .sort((a, b) => b[1].count - a[1].count)
                        .slice(0, 5)
                        .map(([code, stats]) => (
                          <tr key={code} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                  {code}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{stats.count}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{stats.revenue} ETB</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {Math.round(stats.revenue / stats.count)} ETB/user
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center p-12">
                  <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
                  <span className="ml-2 text-gray-600">Loading users...</span>
                </div>
              ) : (
                <>
                  {/* Desktop View */}
                  <div className="hidden md:block">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <AnimatePresence>
                          {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                              <motion.tr
                                key={user.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="hover:bg-gray-50"
                              >
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                      <User className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                                      <div className="text-sm text-gray-500">{user.field}</div>
                                      {user.lastActive && (
                                        <div className="text-xs text-gray-400 mt-1 flex items-center">
                                          <Clock className="h-3 w-3 mr-1" />
                                          {user.lastActive}
                                        </div>
                                      )}
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
                                        {user.referralCode && (
                                          <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                            <Gift className="h-3 w-3 mr-1" />
                                            {user.referralCode}
                                          </span>
                                        )}
                                        {user.referredBy && (
                                          <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                            <Users className="h-3 w-3 mr-1" />
                                            Referred by: {user.referredBy}
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {getStatusBadge(user)}
                                  {user.premiumSince && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      Since: {formatDate(user.premiumSince)}
                                    </div>
                                  )}
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
                                        <span className="font-medium">Amount:</span> {user.paymentAmount} ETB
                                        {user.referredBy && (
                                          <span className="text-xs text-gray-500 ml-1">(Referral)</span>
                                        )}
                                      </div>
                                    )}
                                    {user.paymentDate && (
                                      <div className="text-xs text-gray-500">
                                        {formatDate(user.paymentDate)}
                                      </div>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <div className="flex justify-end space-x-2">
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => handleViewDetails(user)}
                                      className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
                                    >
                                      <FileText className="h-5 w-5" />
                                    </motion.button>
                                    {user.premiumStatus === 'pending' && (
                                      <>
                                        <motion.button
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          onClick={() => handleApprove(user.id)}
                                          className="p-2 rounded-lg text-green-600 hover:bg-green-50 transition-colors disabled:opacity-50"
                                          disabled={isUpdating}
                                        >
                                          <CheckCircle2 className="h-5 w-5" />
                                        </motion.button>
                                        <motion.button
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          onClick={() => handleReject(user.id)}
                                          className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                                          disabled={isUpdating}
                                        >
                                          <XCircle className="h-5 w-5" />
                                        </motion.button>
                                      </>
                                    )}
                                  </div>
                                </td>
                              </motion.tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="px-6 py-12 text-center">
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <AlertCircle className="h-8 w-8 mb-2" />
                                  <p>No users found matching your criteria</p>
                                  <button 
                                    onClick={() => {
                                      setFilter('all');
                                      setSearchQuery('');
                                    }}
                                    className="mt-3 text-sm text-indigo-600 hover:underline"
                                  >
                                    Clear filters
                                  </button>
                                </div>
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
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-4"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <User className="h-5 w-5 text-indigo-600" />
                                  </div>
                                  <div className="ml-3">
                                    <div className="text-base font-medium text-gray-900">{user.fullName}</div>
                                    <div className="text-sm text-gray-500">{user.field}</div>
                                    <div className="mt-1">
                                      {getStatusBadge(user)}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  {user.premiumStatus === 'pending' && (
                                    <>
                                      <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleApprove(user.id)}
                                        className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"
                                        disabled={isUpdating}
                                      >
                                        <CheckCircle2 className="h-5 w-5" />
                                      </motion.button>
                                      <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleReject(user.id)}
                                        className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                                        disabled={isUpdating}
                                      >
                                        <XCircle className="h-5 w-5" />
                                      </motion.button>
                                    </>
                                  )}
                                  <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleViewDetails(user)}
                                    className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50"
                                  >
                                    <FileText className="h-5 w-5" />
                                  </motion.button>
                                </div>
                              </div>
                              
                              <div className="mt-3 pl-13">
                                <div className="text-sm text-gray-600 flex items-center">
                                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                  {user.email}
                                </div>
                                {user.phone && (
                                  <div className="text-sm text-gray-600 mt-1 flex items-center">
                                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                    {user.phone}
                                  </div>
                                )}
                                {user.referralCode && (
                                  <div className="text-xs mt-1">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                      <Gift className="h-3 w-3 mr-1" />
                                      Code: {user.referralCode}
                                    </span>
                                  </div>
                                )}
                                {user.referredBy && (
                                  <div className="text-xs mt-1">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                      <Users className="h-3 w-3 mr-1" />
                                      Referred by: {user.referredBy}
                                    </span>
                                  </div>
                                )}
                                {user.transactionId && (
                                  <div className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium">TXN:</span> {user.transactionId}
                                  </div>
                                )}
                                {user.paymentAmount && (
                                  <div className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium">Amount:</span> {user.paymentAmount} ETB
                                    {user.referredBy && (
                                      <span className="text-xs text-gray-500 ml-1">(Referral)</span>
                                    )}
                                  </div>
                                )}
                                {user.lastActive && (
                                  <div className="text-xs text-gray-400 mt-2 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    Active {user.lastActive}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className="p-12 text-center">
                            <div className="flex flex-col items-center justify-center text-gray-500">
                              <AlertCircle className="h-8 w-8 mb-2" />
                              <p>No users found matching your criteria</p>
                              <button 
                                onClick={() => {
                                  setFilter('all');
                                  setSearchQuery('');
                                }}
                                className="mt-3 text-sm text-indigo-600 hover:underline"
                              >
                                Clear filters
                              </button>
                            </div>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {/* User Details Modal */}
      <AnimatePresence>
        {showModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedUser.fullName}</h2>
                    <p className="text-gray-600">{selectedUser.field}</p>
                  </div>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                      <User className="h-5 w-5 mr-2 text-gray-500" />
                      User Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase">Email</p>
                        <p className="text-gray-700 flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-400" />
                          {selectedUser.email}
                        </p>
                      </div>
                      {selectedUser.phone && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Phone</p>
                          <p className="text-gray-700 flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {selectedUser.phone}
                          </p>
                        </div>
                      )}
                      {selectedUser.referralCode && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Referral Code</p>
                          <p className="text-gray-700 flex items-center">
                            <Gift className="h-4 w-4 mr-2 text-gray-400" />
                            {selectedUser.referralCode}
                          </p>
                        </div>
                      )}
                      {selectedUser.referredBy && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Referred By</p>
                          <p className="text-gray-700 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                            {selectedUser.referredBy}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase">Status</p>
                        <div className="mt-1">
                          {getStatusBadge(selectedUser)}
                        </div>
                      </div>
                      {selectedUser.lastActive && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Last Active</p>
                          <p className="text-gray-700 flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                            {selectedUser.lastActive}
                          </p>
                        </div>
                      )}
                      {selectedUser.signupDate && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Member Since</p>
                          <p className="text-gray-700 flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {formatDate(selectedUser.signupDate)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-gray-500" />
                      Payment Details
                    </h3>
                    <div className="space-y-3">
                      {selectedUser.transactionId && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Transaction ID</p>
                          <p className="text-gray-700">{selectedUser.transactionId}</p>
                        </div>
                      )}
                      {selectedUser.paymentAmount && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Amount Paid</p>
                          <p className="text-gray-700">
                            {selectedUser.paymentAmount} ETB
                            {selectedUser.referredBy && (
                              <span className="text-xs text-gray-500 ml-1">(Referral payment)</span>
                            )}
                          </p>
                        </div>
                      )}
                      {selectedUser.paymentDate && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Payment Date</p>
                          <p className="text-gray-700">{formatDate(selectedUser.paymentDate)}</p>
                        </div>
                      )}
                      {selectedUser.premiumSince && (
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase">Premium Since</p>
                          <p className="text-gray-700">{formatDate(selectedUser.premiumSince)}</p>
                        </div>
                      )}
                      {selectedUser.transactionUrl && (
                        <div className="pt-2">
                          <a 
                            href={selectedUser.transactionUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-600 hover:underline text-sm"
                          >
                            <Link className="h-4 w-4 mr-1" />
                            View Payment Proof
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {selectedUser.premiumStatus === 'pending' && (
                  <div className="mt-6 flex justify-end space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        handleReject(selectedUser.id);
                        setShowModal(false);
                      }}
                      className="px-4 py-2 border border-red-600 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                      disabled={isUpdating}
                    >
                      Reject
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        handleApprove(selectedUser.id);
                        setShowModal(false);
                      }}
                      className="px-4 py-2 bg-indigo-600 text-sm font-medium rounded-lg text-white hover:bg-indigo-700 transition-colors disabled:opacity-50"
                      disabled={isUpdating}
                    >
                      Approve
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}