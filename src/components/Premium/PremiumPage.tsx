import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Phone, 
  Copy, 
  Banknote, 
  Smartphone,
  CloudUpload,
  XCircle,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import { db, storage } from '../../firebase/config';
import { 
  doc, 
  onSnapshot, 
  updateDoc, 
  setDoc, 
  collection,
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import ProgressBar from '../../components/ProgressBar';

type PaymentMethod = 'ebirr' | 'telebirr' | 'cbe';
type PremiumStatus = 'pending' | 'approved' | 'rejected';

export default function PremiumPage() {
  const { currentUser } = useAuth();
  const [transactionId, setTransactionId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7 * 60 * 60); // 7 hours in seconds
  const [activePaymentMethod, setActivePaymentMethod] = useState<PaymentMethod>('telebirr');
  const [premiumStatus, setPremiumStatus] = useState<PremiumStatus>('pending');
  const [isLoading, setIsLoading] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [screenshotUrl, setScreenshotUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch user's premium status
  useEffect(() => {
    if (!currentUser?.uid) return;

    const userRef = doc(db, 'users', currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      const data = docSnap.data();
      if (data) {
        setPremiumStatus(data.premiumStatus || 'pending');
        if (data.transactionId) {
          setTransactionId(data.transactionId);
          setSubmitted(true);
        }
        if (data.screenshotUrl) {
          setScreenshotUrl(data.screenshotUrl);
        }
      }
    }, (error) => {
      console.error("Error fetching premium status:", error);
      toast.error("Failed to load premium status");
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Countdown timer for pending requests
  useEffect(() => {
    if (!submitted || premiumStatus !== 'pending') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, premiumStatus]);

  const handleScreenshotUpload = async (file: File) => {
    if (!currentUser?.uid) return;
    
    setIsUploading(true);
    try {
      const storageRef = ref(storage, `paymentProofs/${currentUser.uid}/${file.name}`);
      const uploadTask = uploadBytes(storageRef, file);
      
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload failed:", error);
          toast.error("Screenshot upload failed");
          setIsUploading(false);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setScreenshotUrl(url);
          toast.success("Screenshot uploaded successfully!");
          setIsUploading(false);
        }
      );
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload screenshot");
      setIsUploading(false);
    }
  };

  const handleRemoveScreenshot = async () => {
    if (!screenshotUrl || !currentUser?.uid) return;
    
    try {
      // Delete from storage
      const imageRef = ref(storage, screenshotUrl);
      await deleteObject(imageRef);
      
      // Clear local state
      setScreenshot(null);
      setScreenshotUrl('');
      
      toast.success("Screenshot removed");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to remove screenshot");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) {
      toast.error('Please enter your transaction ID');
      return;
    }
    if (!screenshotUrl) {
      toast.error('Please upload payment screenshot');
      return;
    }
    if (!currentUser?.uid) {
      toast.error('You must be logged in');
      return;
    }

    setIsLoading(true);
    try {
      // Update user document
      await updateDoc(doc(db, 'users', currentUser.uid), {
        transactionId: transactionId.trim(),
        premiumStatus: 'pending',
        isPremium: false,
        paymentMethod: activePaymentMethod,
        screenshotUrl,
        submittedAt: serverTimestamp(),
      });

      // Create payment submission record
      const submissionsRef = collection(db, 'paymentSubmissions');
      await setDoc(doc(submissionsRef), {
        userId: currentUser.uid,
        transactionId: transactionId.trim(),
        paymentMethod: activePaymentMethod,
        amount: 100, // ETB
        screenshotUrl,
        status: 'pending',
        timestamp: serverTimestamp(),
        userEmail: currentUser.email,
        userName: currentUser.displayName || 'Anonymous',
      });

      setSubmitted(true);
      toast.success('Payment submitted for verification!');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit payment');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const resetForm = () => {
    setSubmitted(false);
    setTransactionId('');
    setPremiumStatus('pending');
    setTimeLeft(7 * 60 * 60);
    setScreenshot(null);
    setScreenshotUrl('');
  };

  // Payment method details
  const paymentMethods = {
    telebirr: {
      name: 'Telebirr',
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      instructions: [
        'Open your Telebirr app',
        'Go to Send Money',
        'Enter phone number: +251994024681',
        'Enter amount: ETB 100',
        'Complete the transaction',
        'Take a screenshot of the transaction'
      ],
      copyText: '+251994024681'
    },
    ebirr: {
      name: 'Ebirr',
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      instructions: [
        'Open your Ebirr app',
        'Go to Send Money',
        'Enter phone number: +251994024681',
        'Enter amount: ETB 100',
        'Complete the transaction',
        'Take a screenshot of the transaction'
      ],
      copyText: '+251994024681'
    },
    cbe: {
      name: 'CBE',
      icon: <Banknote className="h-6 w-6 text-green-600" />,
      instructions: [
        'Open your CBE mobile banking or visit a branch',
        'Go to Transfer Money',
        'Enter account number: 1000611141657',
        'Enter amount: ETB 200',
        'Complete the transaction',
        'Take a screenshot of the transaction'
      ],
      copyText: '1000611141657'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2">
                Go Premium
              </h1>
              <p className="text-purple-600">
                Unlock all premium features and content
              </p>
            </div>

            {premiumStatus === 'approved' ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Congratulations, {currentUser?.displayName || 'User'}!
                </h2>
                <p className="text-gray-600 mb-6">
                  You are now a premium member. Enjoy all the exclusive features!
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-purple-800 mb-2">Premium Benefits</h3>
                  <ul className="text-left text-sm text-gray-700 space-y-1">
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      Unlimited access to all subjects
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      Advanced practice questions
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      Detailed performance analytics
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      Priority customer support
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  Start Exploring
                </button>
              </div>
            ) : premiumStatus === 'rejected' ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
                  <AlertCircle className="h-12 w-12 text-red-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Verification Failed
                </h2>
                <p className="text-gray-600 mb-4">
                  We couldn't verify your transaction. Please contact support or try again.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">+251994024681</span>
                </div>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Try Again
                </button>
              </div>
            ) : submitted && premiumStatus === 'pending' ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-4">
                  <Clock className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Processing Your Request
                </h2>
                <p className="text-gray-600 mb-4">
                  Your transaction ID: <span className="font-mono font-bold text-purple-700">
                    {transactionId}
                  </span>
                </p>
                
                <div className="py-4 sm:py-6 mb-4">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Estimated verification time remaining
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg text-left">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Please be patient while we verify your transaction. You'll receive 
                        a notification once the process is complete.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <h2 className="text-lg font-medium text-gray-800">
                    Choose Payment Method
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(paymentMethods) as PaymentMethod[]).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setActivePaymentMethod(method)}
                        className={`p-3 rounded-lg border flex flex-col items-center ${
                          activePaymentMethod === method 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {paymentMethods[method].icon}
                        <span className="text-sm font-medium mt-1">
                          {paymentMethods[method].name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 flex items-center mb-3">
                    {paymentMethods[activePaymentMethod].icon}
                    <span className="ml-2">
                      {paymentMethods[activePaymentMethod].name} Payment
                    </span>
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    {paymentMethods[activePaymentMethod].instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 mt-3">
                    <span className="font-mono">
                      {paymentMethods[activePaymentMethod].copyText}
                    </span>
                    <button
                      onClick={() => copyToClipboard(paymentMethods[activePaymentMethod].copyText)}
                      className="text-purple-600 hover:text-purple-800 flex items-center"
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </button>
                  </div>
                </div>

                {/* Screenshot Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Payment Screenshot
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      {screenshotUrl ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={screenshotUrl} 
                            alt="Payment proof" 
                            className="w-full h-full object-contain p-2"
                          />
                          <button
                            type="button"
                            onClick={handleRemoveScreenshot}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <CloudUpload className="h-8 w-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG (MAX. 2MB)
                          </p>
                        </div>
                      )}
                      <input 
                        id="screenshot" 
                        type="file" 
                        className="hidden" 
                        accept="image/png,image/jpeg"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            if (file.size > 2 * 1024 * 1024) {
                              toast.error('File size must be less than 2MB');
                              return;
                            }
                            setScreenshot(file);
                            handleScreenshotUpload(file);
                          }
                        }}
                        disabled={isUploading}
                      />
                    </label>
                  </div>
                  {isUploading && (
                    <ProgressBar progress={uploadProgress} />
                  )}
                  {screenshotUrl && !isUploading && (
                    <p className="text-xs text-green-600">Screenshot uploaded successfully!</p>
                  )}
                </div>

                {/* Transaction ID Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter Your Transaction ID
                    </label>
                    <input
                      type="text"
                      id="transactionId"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder={`e.g. ${activePaymentMethod.toUpperCase()}123456789`}
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Find this in your {paymentMethods[activePaymentMethod].name} transaction history
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || isUploading || !screenshotUrl}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Submit Payment'
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>

        {submitted && premiumStatus === 'pending' && (
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                What happens next?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Our admin team reviews your transaction details",
                  "Verification typically completes within 7 hours",
                  "You'll receive immediate access upon approval",
                  "If rejected, you'll receive instructions to try again"
                ].map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-sm sm:text-base">
                        {i + 1}
                      </span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-sm sm:text-base text-gray-700">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}