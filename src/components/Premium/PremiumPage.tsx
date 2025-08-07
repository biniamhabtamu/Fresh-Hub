import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase/config';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { 
  Crown, 
  Check, 
  Upload, 
  CreditCard, 
  Smartphone,
  Shield,
  Gift,
  BarChart,
  Book,
  Archive,
  Headphones,
  Ban,
  Download,
  Award,
  CheckCircle,
  Zap,
  Lock,
  Loader2,
  XCircle,
  ChevronRight
} from 'lucide-react';
import Header from '../Layout/Header';
import { toast } from 'react-hot-toast';

// Utility function to upload image to ImgBB
const uploadImageToImgBB = async (imageFile: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=cee6f899a1f2b76b6a01b89517662be0`, {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error('Image upload failed');
    }
    
    return data.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image. Please try again.');
  }
};

interface FeatureProps {
  text: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ text, icon }) => (
  <div className="flex items-center space-x-4 p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-inner">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-md">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

export default function PremiumPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<'ebirr' | 'telebirr' | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!currentUser) {
      setError('Please log in to access premium features');
    } else {
      setError('');
    }
  }, [currentUser]);

  // Countdown timer for special offer
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 12);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetTime.getTime() - now.getTime();
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setError('Only JPG/PNG files are allowed');
        return;
      }
      setScreenshot(file);
      setError('');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setError('Only JPG/PNG files are allowed');
        return;
      }
      setScreenshot(file);
      setError('');
    }
  };
  
  const removeScreenshot = () => {
    setScreenshot(null);
    setError('');
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      navigate('/login', { state: { from: '/premium' } });
      return;
    }

    setError('');

    if (!selectedMethod) {
      setError('Please select a payment method');
      return;
    }
    
    if (!screenshot) {
      setError('Please upload a payment screenshot');
      return;
    }
    
    setIsLoading(true);

    try {
      const screenshotUrl = await uploadImageToImgBB(screenshot);
      
      const userDocRef = doc(db, 'users', currentUser.uid);
      
      await updateDoc(userDocRef, {
        isPremium: false,
        premiumStatus: 'pending',
        screenshotUrl, 
        submittedAt: serverTimestamp(),
        paymentMethod: selectedMethod,
      });

      setSubmitted(true);
      setSelectedMethod(null);
      setScreenshot(null);
      toast.success('Payment proof submitted successfully!');
    } catch (err) {
      console.error('Payment submission error:', err);
      
      let errorMessage = 'Payment submission failed. Please try again.';

      // More robust check to handle different types of errors
      if (err && err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const featureList = [
    { text: 'Access to all subjects in your field', icon: <Book className="text-indigo-600" /> },
    { text: 'Unlimited practice questions', icon: <Zap className="text-yellow-500" /> },
    { text: 'Detailed performance analytics', icon: <BarChart className="text-blue-500" /> },
    { text: 'Complete exam history (all years)', icon: <Archive className="text-purple-500" /> },
    { text: 'Priority customer support', icon: <Headphones className="text-green-500" /> },
    { text: 'Ad-free learning experience', icon: <Ban className="text-red-500" /> },
    { text: 'Offline question downloads', icon: <Download className="text-cyan-500" /> },
    { text: 'Global leaderboard participation', icon: <Award className="text-amber-500" /> }
  ];

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 transform scale-105">
              <Lock className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Login Required</h2>
            <p className="text-gray-600 mb-8 text-lg">
              You need to be logged in to submit payment for premium access. Please log in to continue your journey!
            </p>
            <button
              onClick={() => navigate('/login', { state: { from: '/premium' } })}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Go to Login Page <ChevronRight className="inline-block ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="max-w-2xl w-full">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-10 text-center border border-white/50 relative overflow-hidden animate-fade-in-up">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"></div>
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                    <Crown size={48} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Payment Submitted!</h2>
                  <p className="text-gray-600 text-lg">
                    We've received your proof. Please wait a few hours while we verify your payment and activate your premium access.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200 rounded-2xl p-6 text-left shadow-md">
                    <div className="flex items-start space-x-3">
                      <Shield className="flex-shrink-0 text-amber-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-amber-800 mb-2 text-xl">Important Information</h3>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• Your request is pending verification.</li>
                          <li>• Premium access will be activated within **5 hours**.</li>
                          <li>• If you face any issues, please contact us at: **0994024681**</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 text-left shadow-md">
                    <div className="flex items-start space-x-3">
                      <Gift className="flex-shrink-0 text-indigo-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-indigo-800 mb-2 text-xl">What's Next?</h3>
                        <p className="text-indigo-700 text-sm">
                          Once activated, you'll immediately gain access to all the premium features you've unlocked.
                        </p>
                        <button
                          onClick={() => navigate('/premium-features-list')}
                          className="mt-3 text-blue-600 font-semibold text-sm hover:underline flex items-center"
                        >
                          See all features <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-20 w-28 h-28 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <div className="relative z-10">
              <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 transform scale-110">
                <Crown size={60} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
                Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Premium</span> Access
              </h1>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
                Get full access to all subjects, advanced features, and boost your exam preparation with a one-time payment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-10 border border-white/50 animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Premium Features</h2>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  EXCLUSIVE
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {featureList.map((feature, index) => (
                  <FeatureCard key={index} text={feature.text} icon={feature.icon} />
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-extrabold text-gray-800">200 Birr</div>
                    <div className="text-lg text-gray-600">One-time payment</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    SAVE 75%
                  </div>
                </div>
                <div className="mt-4 text-sm text-green-600 font-medium flex items-center">
                  <CheckCircle className="mr-2" size={18} /> 
                  <span>Lifetime Access - No subscriptions!</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 text-center shadow-lg">
                <h3 className="font-bold text-lg text-yellow-800 mb-2">Limited-Time Offer!</h3>
                <p className="text-gray-700 mb-3">This special price is available for a limited time only.</p>
                <div className="flex justify-center items-center space-x-4 font-mono text-2xl md:text-3xl font-bold text-gray-800">
                  <div className="bg-white/50 backdrop-blur-md rounded-xl p-3 shadow-md flex-1">
                    <span>{countdown.hours.toString().padStart(2, '0')}</span>
                    <span className="block text-sm font-normal text-gray-600">Hours</span>
                  </div>
                  <span className="text-gray-500">:</span>
                  <div className="bg-white/50 backdrop-blur-md rounded-xl p-3 shadow-md flex-1">
                    <span>{countdown.minutes.toString().padStart(2, '0')}</span>
                    <span className="block text-sm font-normal text-gray-600">Minutes</span>
                  </div>
                  <span className="text-gray-500">:</span>
                  <div className="bg-white/50 backdrop-blur-md rounded-xl p-3 shadow-md flex-1">
                    <span>{countdown.seconds.toString().padStart(2, '0')}</span>
                    <span className="block text-sm font-normal text-gray-600">Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-10 border border-white/50 animate-fade-in animation-delay-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Complete Payment</h2>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  SECURE
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Payment Method {!selectedMethod && error.includes('payment method') && (
                    <span className="text-red-500 text-xs ml-2">(Required)</span>
                  )}
                </label>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setSelectedMethod('ebirr');
                      setError('');
                    }}
                    className={`w-full p-6 rounded-2xl transition-all border-2 ${
                      selectedMethod === 'ebirr'
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : error.includes('payment method') 
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-5">
                      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shadow-inner">
                        <CreditCard size={28} className="text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg text-gray-800">Ebirr</div>
                        <div className="text-sm text-gray-600">Digital wallet payment</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedMethod('telebirr');
                      setError('');
                    }}
                    className={`w-full p-6 rounded-2xl transition-all border-2 ${
                      selectedMethod === 'telebirr'
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : error.includes('payment method') 
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-5">
                      <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shadow-inner">
                        <Smartphone size={28} className="text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg text-gray-800">Telebirr</div>
                        <div className="text-sm text-gray-600">Mobile payment solution</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {selectedMethod && (
                <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 shadow-md">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-base font-bold w-7 h-7 rounded-full flex items-center justify-center mr-3">
                      1
                    </span>
                    Payment Instructions
                  </h3>
                  <div className="text-base text-gray-700 space-y-3 pl-10">
                    <p className="flex items-center">
                      <span className="font-bold w-6 inline-block">1.</span> 
                      <span className="ml-2">Send 200 Birr to: <span className="font-mono bg-indigo-100 px-2 py-0.5 rounded-md text-indigo-700 font-semibold">+251 994 024 681</span></span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-bold w-6 inline-block">2.</span> 
                      <span className="ml-2">Take a clear screenshot of the payment confirmation.</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-bold w-6 inline-block">3.</span> 
                      <span className="ml-2">Upload the screenshot below to verify.</span>
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-base font-bold w-7 h-7 rounded-full flex items-center justify-center mr-3">
                      2
                    </span>
                    Upload Payment Screenshot
                    {!screenshot && error.includes('screenshot') && (
                      <span className="text-red-500 text-xs ml-2">(Required)</span>
                    )}
                  </label>
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                      border-2 rounded-2xl p-8 text-center transition-all cursor-pointer relative
                      ${isDragging 
                        ? 'border-blue-500 bg-blue-50 shadow-inner' 
                        : error.includes('screenshot') 
                          ? 'border-red-500 bg-red-50'
                          : 'border-dashed border-gray-300 hover:border-blue-400 bg-gray-50'
                      }
                    `}
                    onClick={() => document.getElementById('screenshot-upload')?.click()}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="screenshot-upload"
                    />
                    {screenshot ? (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                        <img src={URL.createObjectURL(screenshot)} alt="Payment Screenshot" className="object-cover w-full h-full" />
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeScreenshot(); }} 
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                          aria-label="Remove screenshot"
                        >
                          <XCircle size={20} />
                        </button>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-lg font-bold">
                          Image Preview
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto">
                            <Upload size={32} className={isDragging ? "text-blue-500" : error.includes('screenshot') ? "text-red-500" : "text-gray-400"} />
                          </div>
                        </div>
                        <p className={`font-bold text-lg mb-1 ${
                          error.includes('screenshot') ? 'text-red-500' : 'text-gray-700'
                        }`}>
                          Click to upload or drag & drop
                        </p>
                        <p className={`text-sm ${
                          error.includes('screenshot') ? 'text-red-400' : 'text-gray-500'
                        }`}>
                          PNG, JPG up to 5MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm border border-red-200">
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading || !selectedMethod || !screenshot}
                className={`
                  w-full py-4 rounded-2xl font-bold text-white transition-all text-xl
                  ${isLoading || !selectedMethod || !screenshot
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 hover:shadow-xl transform hover:-translate-y-1'
                  }
                `}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="h-6 w-6 mr-3 animate-spin" />
                    Submitting...
                  </div>
                ) : 'Submit Payment Proof'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}