import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const PremiumSuccessPage = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds
  const [userData, setUserData] = useState({ fullName: "", field: "", phone: "" });

  const BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
  const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData({
            fullName: data.fullName || "",
            field: data.field || "",
            phone: data.phone || "",
          });

          // Send data to Telegram
          const message = `📢 New Premium Verification\n👤 Full Name: ${data.fullName}\n📚 Field: ${data.field}\n📱 Phone: ${data.phone}`;
          await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
          });
        }
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">✅ Submitted Successfully!</h1>
        <p className="mb-6 text-lg">Please wait for admin approval.</p>

        <div className="bg-black/30 p-4 rounded-xl mb-6">
          <p className="text-lg mb-2">⏳ Time Remaining:</p>
          <h2 className="text-4xl font-mono">{formatTime(timeLeft)}</h2>
        </div>

        {timeLeft === 0 && (
          <div className="bg-red-500 p-4 rounded-lg">
            <p className="text-lg font-bold">❌ Time Expired</p>
            <p>Contact us: 📞 0994024681</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumSuccessPage;
