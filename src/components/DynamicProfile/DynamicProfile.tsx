import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, onSnapshot, updateDoc, collection, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { 
  User, Mail, Calendar, BookOpen, Award, BarChart, 
  Edit, Save, X, Lock, Smartphone, CreditCard, Upload, 
  Bell, Clock, Trophy, CheckCircle, Star, PieChart, Crown
} from 'lucide-react';
import { updatePassword, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { uploadBytes, ref, getDownloadURL, getStorage } from 'firebase/storage';

interface FormData {
  displayName: string;
  phoneNumber: string;
  bio: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Stats {
  totalQuizzes: number;
  averageScore: number;
  premiumSince: Date | null;
  lastActive: Date | null;
}

interface SubjectStat {
  name: string;
  average: number;
  total: number;
  count: number;
  icon: string;
}

interface Activity {
  id: string;
  subject: string;
  score: number;
  date?: Date;
}

const DynamicProfile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    displayName: '',
    phoneNumber: '',
    bio: ''
  });
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [activeTab, setActiveTab] = useState('profile');
  const [stats, setStats] = useState<Stats>({
    totalQuizzes: 0,
    averageScore: 0,
    premiumSince: null,
    lastActive: null
  });
  const [subjectStats, setSubjectStats] = useState<SubjectStat[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);

  // Real-time user data listener
  useEffect(() => {
    if (!currentUser) return;
    
    const userRef = doc(db, 'users', currentUser.uid);
    const unsubscribeUser = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserData(data);
        setFormData({
          displayName: data.displayName || '',
          phoneNumber: data.phoneNumber || '',
          bio: data.bio || ''
        });
        setStats(prev => ({
          ...prev,
          premiumSince: data.premiumSince?.toDate() || null,
          lastActive: data.lastActive?.toDate() || null
        }));
        if (data.profileImage) {
          setImagePreview(data.profileImage);
        }
      }
      setLoading(false);
    });

    return () => unsubscribeUser();
  }, [currentUser]);

  // Real-time stats listener
  useEffect(() => {
    if (!currentUser) return;

    // Get quiz results
    const resultsQuery = query(
      collection(db, 'quizResults'),
      where('userId', '==', currentUser.uid),
      orderBy('timestamp', 'desc'),
      limit(5)
    );

    const unsubscribeResults = onSnapshot(resultsQuery, (snapshot) => {
      let totalScore = 0;
      const subjectPerformance: Record<string, {name: string, total: number, count: number, icon: string}> = {};
      const activity: Activity[] = [];

      snapshot.forEach(doc => {
        const result = doc.data();
        totalScore += result.score;
        activity.push({
          id: doc.id,
          subject: result.subjectName,
          score: result.score,
          date: result.timestamp?.toDate()
        });

        // Calculate subject stats
        if (!subjectPerformance[result.subjectId]) {
          subjectPerformance[result.subjectId] = {
            name: result.subjectName,
            total: 0,
            count: 0,
            icon: result.subjectIcon || '📚'
          };
        }
        subjectPerformance[result.subjectId].total += result.score;
        subjectPerformance[result.subjectId].count++;
      });

      // Format subject stats
      const formattedSubjectStats = Object.values(subjectPerformance).map(subject => ({
        ...subject,
        average: Math.round((subject.total / subject.count) * 10) / 10
      }));

      setSubjectStats(formattedSubjectStats);
      setRecentActivity(activity);
      setStats(prev => ({
        ...prev,
        totalQuizzes: snapshot.size,
        averageScore: snapshot.size > 0 ? Math.round(totalScore / snapshot.size) : 0
      }));
    });

    return () => unsubscribeResults();
  }, [currentUser]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadProfileImage = async () => {
    if (!profileImage || !currentUser) return;
    
    try {
      setLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, `profileImages/${currentUser.uid}`);
      await uploadBytes(storageRef, profileImage);
      const downloadURL = await getDownloadURL(storageRef);

      await updateDoc(doc(db, 'users', currentUser.uid), {
        profileImage: downloadURL
      });

      setSuccess('Profile image updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload profile image');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    
    try {
      setLoading(true);
      setError('');
      
      const updates = {
        displayName: formData.displayName,
        phoneNumber: formData.phoneNumber,
        bio: formData.bio,
        updatedAt: new Date()
      };

      await updateDoc(doc(db, 'users', currentUser.uid), updates);
      
      setEditMode(false);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !currentUser.email) return;
    
    try {
      setLoading(true);
      setError('');
      
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        throw new Error("Passwords don't match");
      }
      
      if (passwordData.newPassword.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        passwordData.currentPassword
      );
      
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, passwordData.newPassword);
      
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      setSuccess('Password updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      console.error('Error changing password:', err);
      setError(err.message || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !userData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock size={16} />
            <span>Last active: {stats.lastActive ? new Date(stats.lastActive).toLocaleString() : 'Recently'}</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('settings')}
          >
            Account
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'activity' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>
        
        {/* Error/Success Messages */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Profile" 
                        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        {userData?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || 'U'}
                      </div>
                    )}
                    <label htmlFor="profileImage" className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100">
                      <Edit size={16} className="text-blue-600" />
                      <input 
                        id="profileImage" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {userData?.displayName || 'No name set'}
                    </h2>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="mr-2" size={16} />
                      {currentUser?.email}
                    </p>
                    {userData?.premiumSince && (
                      <div className="flex items-center mt-1">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                          <Crown size={12} className="mr-1" />
                          Premium Member
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                  <span>{editMode ? 'Cancel' : 'Edit Profile'}</span>
                </button>
              </div>
              
              {editMode ? (
                <form onSubmit={handleUpdateProfile}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                      <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    {profileImage && (
                      <div className="flex justify-between items-center pt-2">
                        <button
                          type="button"
                          onClick={uploadProfileImage}
                          className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                        >
                          Upload New Photo
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setProfileImage(null);
                            setImagePreview(userData?.profileImage || '');
                          }}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                    <div className="flex justify-end space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                      >
                        {loading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User size={18} className="text-gray-500" />
                    <span className="text-gray-700">
                      <span className="font-medium">Name:</span> {userData?.displayName || 'Not set'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone size={18} className="text-gray-500" />
                    <span className="text-gray-700">
                      <span className="font-medium">Phone:</span> {userData?.phoneNumber || 'Not set'}
                    </span>
                  </div>
                  {userData?.bio && (
                    <div className="flex items-start space-x-3">
                      <BookOpen size={18} className="text-gray-500 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Bio:</span> {userData.bio}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <Calendar size={18} className="text-gray-500" />
                    <span className="text-gray-700">
                      <span className="font-medium">Member since:</span> {new Date(currentUser?.metadata?.creationTime || '').toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <Lock className="mr-2" size={18} />
                  Change Password
                </h3>
                <form onSubmit={handleChangePassword}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                      >
                        {loading ? 'Updating...' : 'Update Password'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Notification Preferences */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <Bell className="mr-2" size={18} />
                  Notification Preferences
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive important updates via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={userData?.emailNotifications !== false}
                        onChange={async () => {
                          await updateDoc(doc(db, 'users', currentUser.uid), {
                            emailNotifications: !(userData?.emailNotifications !== false)
                          });
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-500">Get alerts on your device</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={userData?.pushNotifications !== false}
                        onChange={async () => {
                          await updateDoc(doc(db, 'users', currentUser.uid), {
                            pushNotifications: !(userData?.pushNotifications !== false)
                          });
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Your Learning Statistics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stats.totalQuizzes}</div>
                  <div className="text-gray-700">Quizzes Completed</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-1">{stats.averageScore}%</div>
                  <div className="text-gray-700">Average Score</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {userData?.premiumSince ? 'Premium' : 'Free'}
                  </div>
                  <div className="text-gray-700">Account Status</div>
                </div>
              </div>
              
              <h4 className="text-md font-medium text-gray-800 mb-4 flex items-center">
                <PieChart className="mr-2" size={18} />
                Subject Performance
              </h4>
              
              <div className="space-y-4">
                {subjectStats.length > 0 ? (
                  subjectStats.map((subject) => (
                    <div key={subject.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 flex items-center">
                          <span className="mr-2">{subject.icon}</span>
                          {subject.name}
                        </span>
                        <span className="text-sm font-medium text-blue-600">{subject.average}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${subject.average}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No quiz results yet. Complete some quizzes to see your statistics.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Recent Activity</h3>
              
              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-3">
                        <CheckCircle className="text-blue-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-gray-800">Quiz Completed</h4>
                          <span className="text-sm text-gray-500">
                            {activity.date?.toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          <span className="font-medium">{activity.subject}:</span> Scored {activity.score}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Trophy className="mx-auto mb-3 text-gray-400" size={24} />
                  <p>No recent activity yet</p>
                  <p className="text-sm mt-1">Complete quizzes to see your activity here</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicProfile;