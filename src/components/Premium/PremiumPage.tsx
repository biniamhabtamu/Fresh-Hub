import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { submitPaymentProof } from '../../firebase/payments';
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
  Lock
} from 'lucide-react';
import Header from '../Layout/Header';

export default function PremiumPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<'ebirr' | 'telebirr' | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setError('Please log in to access premium features');
    } else {
      setError('');
    }
  }, [currentUser]);

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
      await submitPaymentProof(
        currentUser.uid,
        selectedMethod,
        screenshot,
        transactionId,
        {
          fullName: currentUser.displayName || 'User',
          email: currentUser.email || 'no-email@example.com'
        }
      );
      setSubmitted(true);
      setSelectedMethod(null);
      setScreenshot(null);
      setTransactionId('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment submission failed. Please try again.');
      console.error('Payment submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to submit payment for premium access.
            </p>
            <button
              onClick={() => navigate('/login', { state: { from: '/premium' } })}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:shadow-md transition-all"
            >
              Go to Login Page
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
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 text-center border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"></div>
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-yellow-200 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Crown size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Submitted!</h2>
                  <p className="text-gray-600">
                    Please wait a few hours. We are verifying your payment...
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6 text-left">
                  <div className="flex items-start space-x-3">
                    <Shield className="flex-shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-amber-800 mb-2">Important Information</h3>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Contact us at: <span className="font-bold">0994024681</span></li>
                        <li>• Our team will review your payment proof within 2-4 hours</li>
                        <li>• You'll receive a notification once activated</li>
                        <li>• Check your email for confirmation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Gift className="flex-shrink-0 text-indigo-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-indigo-800 mb-2">Premium Activated?</h3>
                      <p className="text-indigo-700 text-sm">
                        Enjoy these premium features immediately after activation:
                      </p>
                      <ul className="mt-2 grid grid-cols-2 gap-1 text-sm">
                        {['All Subjects', 'Unlimited Questions', 'Advanced Analytics', 'Ad-Free', 'Offline Access', 'Priority Support', 'Leaderboards', 'Exam History'].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <Check size={14} className="text-green-500 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={48} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Premium</span> Access
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get full access to all subjects, advanced features, and boost your exam preparation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl p-8 border border-white/50">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Premium Features</h2>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  EXCLUSIVE
                </div>
              </div>
              
              <div className="space-y-5">
                {[
                  {text: 'Access to all subjects in your field', icon: <Book className="text-indigo-600" />},
                  {text: 'Unlimited practice questions', icon: <Zap className="text-yellow-500" />},
                  {text: 'Detailed performance analytics', icon: <BarChart className="text-blue-500" />},
                  {text: 'Complete exam history (all years)', icon: <Archive className="text-purple-500" />},
                  {text: 'Priority customer support', icon: <Headphones className="text-green-500" />},
                  {text: 'Ad-free learning experience', icon: <Ban className="text-red-500" />},
                  {text: 'Offline question downloads', icon: <Download className="text-cyan-500" />},
                  {text: 'Global leaderboard participation', icon: <Award className="text-amber-500" />}
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-800">200 Birr</div>
                    <div className="text-gray-600">One-time payment</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold">
                    SAVE 75%
                  </div>
                </div>
                <div className="mt-3 text-sm text-green-600 font-medium flex items-center">
                  <CheckCircle className="mr-2" size={16} /> 
                  <span>Lifetime Access - Never pay again!</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-white/50">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                    className={`w-full p-5 rounded-2xl transition-all border ${
                      selectedMethod === 'ebirr'
                        ? 'border-blue-500 bg-blue-50 shadow-sm'
                        : error.includes('payment method') 
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <CreditCard size={24} className="text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">Ebirr</div>
                        <div className="text-sm text-gray-600">Digital wallet payment</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedMethod('telebirr');
                      setError('');
                    }}
                    className={`w-full p-5 rounded-2xl transition-all border ${
                      selectedMethod === 'telebirr'
                        ? 'border-blue-500 bg-blue-50 shadow-sm'
                        : error.includes('payment method') 
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <Smartphone size={24} className="text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">Telebirr</div>
                        <div className="text-sm text-gray-600">Mobile payment solution</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {selectedMethod && (
                <div className="mb-8 p-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-1 rounded mr-2">
                      1
                    </span>
                    Payment Instructions
                  </h3>
                  <div className="text-sm text-gray-700 space-y-2 pl-8">
                    <p className="flex">
                      <span className="font-bold w-6 inline-block">1.</span> 
                      Send 200 Birr to: <span className="font-mono bg-indigo-100 px-2 py-0.5 rounded ml-2">+251 994 024 681</span>
                    </p>
                    <p className="flex">
                      <span className="font-bold w-6 inline-block">2.</span> 
                      Take a clear screenshot of the payment confirmation
                    </p>
                    <p className="flex">
                      <span className="font-bold w-6 inline-block">3.</span> 
                      Upload the screenshot below
                    </p>
                    <p className="flex">
                      <span className="font-bold w-6 inline-block">4.</span> 
                      We'll activate premium within 2-4 hours
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter transaction ID if available"
                  />
                </div>
              )}

              {selectedMethod && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-1 rounded mr-2">
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
                      border-2 rounded-2xl p-8 text-center transition-all cursor-pointer
                      ${isDragging 
                        ? 'border-blue-500 bg-blue-50' 
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
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto">
                        <Upload size={24} className={isDragging ? "text-blue-500" : error.includes('screenshot') ? "text-red-500" : "text-gray-400"} />
                      </div>
                    </div>
                    <p className={`font-medium mb-1 ${
                      error.includes('screenshot') ? 'text-red-500' : 'text-gray-700'
                    }`}>
                      {screenshot ? 'Screenshot Selected' : 'Click to upload or drag & drop'}
                    </p>
                    <p className={`text-sm ${
                      error.includes('screenshot') ? 'text-red-400' : 'text-gray-500'
                    }`}>
                      {screenshot ? (
                        <span className="text-green-600 font-medium">{screenshot.name}</span>
                      ) : (
                        'PNG, JPG up to 5MB'
                      )}
                    </p>
                    {screenshot && (
                      <div className="mt-4 text-green-600 flex justify-center">
                        <CheckCircle className="mr-2" size={16} /> Ready to submit
                      </div>
                    )}
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading || !selectedMethod || !screenshot}
                className={`
                  w-full py-4 rounded-2xl font-bold text-white transition-all
                  ${isLoading || !selectedMethod || !screenshot
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 hover:shadow-lg transform hover:-translate-y-0.5'
                  }
                `}
              >
                {isLoading ? 'Submitting...' : 'Submit Payment Proof'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}