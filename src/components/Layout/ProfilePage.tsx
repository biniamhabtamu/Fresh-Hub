import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { User, Mail, Calendar, Edit, CheckCircle, X, Lock, LogOut } from 'lucide-react';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { uploadBytes, ref, getDownloadURL, getStorage } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

interface FormData {
  displayName: string;
  bio: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    displayName: '',
    bio: ''
  });
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

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
          bio: data.bio || ''
        });
        if (data.profileImage) {
          setImagePreview(data.profileImage);
        }
      }
      setLoading(false);
    });

    return () => unsubscribeUser();
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

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const getUserInitials = () => {
    if (!currentUser?.displayName) return currentUser?.email?.charAt(0)?.toUpperCase() || 'U';
    const names = currentUser.displayName.split(' ');
    return names.map(name => name[0]).join('').toUpperCase().slice(0, 2);
  };

  if (loading && !userData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto py-8 px-4">
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">
      {/* Profile Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative group">
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl ring-4 ring-white/20">
                  {getUserInitials()}
                </div>
              )}
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-100 transition-all transform hover:scale-110 cursor-pointer">
                  <Edit size={18} />
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {editMode ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.displayName}
                    onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                    className="text-3xl font-bold bg-transparent border-b-2 border-white/50 focus:border-white focus:outline-none text-white w-full"
                  />
                  <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="text-lg bg-transparent border-b-2 border-white/30 focus:border-white focus:outline-none text-white/90 w-full"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-white">{formData.displayName || 'No name set'}</h1>
                  <p className="text-lg text-white/90 mt-1">{formData.bio}</p>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                    <div className="flex items-center text-white/80 text-sm">
                      <Mail size={16} className="mr-1" />
                      <span>{currentUser?.email}</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>Joined {new Date(currentUser?.metadata?.creationTime || '').toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              {editMode ? (
                <>
                  <button 
                    onClick={handleUpdateProfile}
                    className="bg-white text-indigo-600 px-4 py-2 rounded-full flex items-center gap-1 hover:bg-indigo-50 transition-all shadow-md transform hover:scale-105"
                  >
                    <CheckCircle size={18} /> Save
                  </button>
                  <button 
                    onClick={() => setEditMode(false)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-white/30 transition-all transform hover:scale-105"
                  >
                    <X size={18} /> Cancel
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setEditMode(true)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-white/30 transition-all transform hover:scale-105"
                  >
                    <Edit size={18} /> Edit Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-white/20 transition-all border border-white/20 transform hover:scale-105"
                  >
                    <LogOut size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Settings Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6">
          <div className="p-6">
            {/* Change Password */}
            <div className="mb-8">
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

            {/* Profile Image Upload */}
            {profileImage && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Image</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={uploadProfileImage}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                    >
                      Upload
                    </button>
                    <button
                      onClick={() => {
                        setProfileImage(null);
                        setImagePreview(userData?.profileImage || '');
                      }}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;