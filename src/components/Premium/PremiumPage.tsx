import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FaTelegram, FaClock, FaCheckCircle, FaUpload, FaMoneyBillWave, FaCrown } from "react-icons/fa";
import { MdAccountBalance, MdPayment } from "react-icons/md";

// Define the duration for the timer (5 hours in milliseconds)
const TIMER_DURATION_MS = 5 * 60 * 60 * 1000;

export default function PremiumPage() {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const IMGBB_KEY = "cee6f899a1f2b76b6a01b89517662be0";
  const TELEGRAM_BOT_TOKEN = "7516286710:AAGlGBxpmyVQuLW1lcm4rVw-wC1UZ_dp5l4";
  const TELEGRAM_CHAT_ID = "901943741";

  useEffect(() => {
    const auth = getAuth();
    const authUser = auth.currentUser;

    if (!authUser) return;

    const userRef = doc(db, "users", authUser.uid);

    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        
        // Check for the submission status
        if (data.premiumSubmission) {
          setSubmissionData(data.premiumSubmission);
          
          // Check if admin has approved the premium
          if (data.premiumSubmission.status === 'approved') {
            // Clear the timer if approved
            setTimeLeft(0);
          }
        } else {
          setSubmissionData(null);
        }
      } else {
        setUserData(null);
        setSubmissionData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (submissionData && submissionData.timestamp && submissionData.status !== 'approved') {
      const submissionTime = submissionData.timestamp.toDate().getTime();
      const endTime = submissionTime + TIMER_DURATION_MS;

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const remaining = Math.max(0, endTime - now);
        setTimeLeft(Math.floor(remaining / 1000));

        if (remaining <= 0) {
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [submissionData]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (!data.success) throw new Error("ImgBB upload failed");
    return data.data.url;
  };

  const sendToTelegram = async (email, phone, imgUrl) => {
    const text = `📢 New Premium Verification Request\n\n📧 Email: ${email}\n📞 Phone: ${
      phone || "Not provided"
    }\n🖼 Screenshot: ${imgUrl}`;
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(`Telegram message failed: ${data.description || "Unknown error"}`);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload a payment screenshot!");
      return;
    }
    if (!userData?.email) {
      alert("User data not loaded!");
      return;
    }

    setLoading(true);
    try {
      const authUser = getAuth().currentUser;
      const imgUrl = await uploadToImgBB(image);
      await sendToTelegram(userData.email, userData.phone, imgUrl);
      
      const userRef = doc(db, "users", authUser.uid);
      await setDoc(userRef, {
        premiumSubmission: {
          timestamp: serverTimestamp(),
          imageUrl: imgUrl,
          status: 'pending'
        }
      }, { merge: true });

    } catch (error) {
      console.error(error);
      alert("Submission failed: " + error.message);
    }
    setLoading(false);
  };

  // Render different states based on submission status
  if (submissionData) {
    if (submissionData.status === 'approved') {
      return (
        <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-2xl rounded-2xl mt-10 text-center border border-purple-200">
          <div className="flex justify-center mb-6">
            <FaCrown className="text-yellow-500 text-6xl animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            Premium Approved!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your premium features have been approved by admin. Thank you for using our app!
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-inner mb-8">
            <div className="flex items-center justify-center space-x-2">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-xl font-semibold text-gray-700">Status: Active</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-gray-700">
              Enjoy your premium features! If you have any questions, feel free to contact us.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-50 shadow-2xl rounded-2xl mt-10 text-center border border-green-200">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Submission Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment verification is being processed. Premium features will be activated within:
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-inner mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaClock className="text-blue-600 text-2xl" />
            <span className="text-2xl font-semibold text-gray-700">Time Remaining</span>
          </div>
          <div className="text-5xl font-mono font-bold text-blue-700">
            {formatTime(timeLeft)}
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Note:</span> If premium isn't activated after the timer ends:
          </p>
          <div className="flex items-center justify-center space-x-2">
            <FaTelegram className="text-blue-500" />
            <a href="https://t.me/bh068" className="text-blue-600 font-medium">Contact us on Telegram</a>
          </div>
          <p className="text-lg font-semibold text-blue-600 mt-2 flex items-center justify-center">
            <span className="mr-2">📞</span> 0994024681
          </p>
        </div>
      </div>
    );
  }

  // The rest of the component remains unchanged (the form)
  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl rounded-2xl mt-8 border border-blue-200">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Premium Verification</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FaMoneyBillWave className="text-green-600 text-2xl" />
            <span className="text-xl font-bold">Payment Details</span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-full">
            <span className="text-green-800 font-semibold">50 birr discount</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <MdAccountBalance className="text-blue-600" />
              <span className="font-semibold">Bank Accounts</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm text-gray-700">Commercial Bank of Ethiopia</p>
                <p className="text-sm">1000611141657</p>
                <p className="text-xs text-gray-500">Biniyam Habtamu Woldeyohanness</p>
              </div>
              <div>
                <p className="font-medium text-sm text-gray-700">Bank of Oromia COOP</p>
                <p className="text-sm">1006800295884</p>
                <p className="text-xs text-gray-500">Biniyam Habtamu Woldeyohanness</p>
              </div>
              <div>
                <p className="font-medium text-sm text-gray-700">Dashen Bank</p>
                <p className="text-sm">5852681715011</p>
                <p className="text-xs text-gray-500">Biniyam Habtamu Woldeyohanness</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <MdPayment className="text-purple-600" />
              <span className="font-semibold">Total Amount</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Premium Fee</span>
              <span className="font-bold text-lg text-purple-700">300 birr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Discount</span>
              <span className="font-bold text-green-600">-50 birr</span>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">You Pay</span>
              <span className="font-bold text-2xl text-blue-700">250 birr</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <FaUpload className="text-blue-600" />
          <span className="font-bold text-lg">Upload Payment Proof</span>
        </div>
        
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
          {preview ? (
            <img src={preview} alt="Preview" className="h-full w-full object-contain rounded-lg" />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">Screenshot of your payment (PNG, JPG)</p>
            </div>
          )}
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
            className="hidden" 
          />
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || !image}
        className={`w-full py-3 px-4 rounded-xl text-white font-bold text-lg shadow-md transition-all
          ${loading ? 'bg-blue-400' : !image ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}
          flex items-center justify-center space-x-2`}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>Submit Verification</>
        )}
      </button>
    </div>
  );
}