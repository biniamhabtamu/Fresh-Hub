import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"; // Adjust path to your firebase config

export default function PremiumPage() {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds

  const IMGBB_KEY = "cee6f899a1f2b76b6a01b89517662be0";
  const TELEGRAM_BOT_TOKEN = "7516286710:AAGlGBxpmyVQuLW1lcm4rVw-wC1UZ_dp5l4";
  const TELEGRAM_CHAT_ID = "901943741"; // Replace with your numeric chat ID

  useEffect(() => {
    const fetchUserData = async () => {
      const authUser = getAuth().currentUser;
      if (!authUser) return;
      const userRef = doc(db, "users", authUser.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        setUserData(snap.data());
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [submitted, timeLeft]);

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
      const imgUrl = await uploadToImgBB(image);
      await sendToTelegram(userData.email, userData.phone, imgUrl);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Submission failed: " + error.message);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-green-50 shadow-lg rounded-xl mt-10 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          ✅ Submitted Successfully!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Please wait for admin approval. Your premium features will be released
          within:
        </p>
        <div className="text-4xl font-mono font-bold text-blue-700 bg-white shadow-inner rounded-lg p-4 mb-6">
          {formatTime(timeLeft)}
        </div>
        <p className="text-gray-600">
          If your premium features are not released after the countdown ends,
          please contact us:
        </p>
        <p className="text-lg font-semibold text-blue-600 mt-2">
          📞 0994024681
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h1 className="text-2xl font-bold text-center mb-6">Premium Verification</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="font-semibold text-lg">Price: 300 birr</p>
        <p className="text-green-700 font-semibold mb-2">Discount: 50 birr</p>
        <p className="mb-2">Send your payment to any of the following accounts:</p>
        <ul className="list-disc ml-6 text-sm space-y-1">
          <li>
            <b>Commercial Bank of Ethiopia:</b> 1000611141657 — Biniyam Habtamu Woldeyohanness
          </li>
          <li>
            <b>Bank of Oromia COOP:</b> 1006800295884 — Biniyam Habtamu Woldeyohanness
          </li>
          <li>
            <b>Dashen Bank:</b> 5852681715011 — Biniyam Habtamu Woldeyohanness
          </li>
        </ul>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-6 w-full border rounded p-2"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
