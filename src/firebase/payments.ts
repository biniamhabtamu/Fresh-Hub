// src/firebase/payments.ts
import { db } from './config';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

// Your ImgBB API key from the provided information
const IMGBB_API_KEY = "cee6f899a1f2b76b6a01b89517662be0";

export const submitPaymentProof = async (
  userId,
  paymentMethod,
  screenshotFile, // This is the File object from PremiumPage.tsx
  transactionId,
  userData
) => {
  // CRITICAL: Ensure userId is a valid string before proceeding
  if (!userId || typeof userId !== 'string') {
    throw new Error("Invalid user ID provided. Payment submission aborted.");
  }
  
  // Ensure the screenshot file is present and is a File object
  if (!screenshotFile || !(screenshotFile instanceof File)) {
    throw new Error("Invalid screenshot file provided.");
  }

  try {
    // Step 1: Upload the screenshot to ImgBB
    const formData = new FormData();
    formData.append("image", screenshotFile);

    const imgbbResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!imgbbResponse.ok) {
      const errorData = await imgbbResponse.json().catch(() => ({ message: "Could not parse error response" }));
      throw new Error(`Failed to upload image to ImgBB: ${errorData.error?.message || imgbbResponse.statusText}`);
    }

    const imgbbData = await imgbbResponse.json();

    if (!imgbbData.data || !imgbbData.data.url) {
      console.error("ImgBB response data:", imgbbData);
      throw new Error("ImgBB upload succeeded but no URL was returned.");
    }
    const screenshotUrl = imgbbData.data.url;

    // Step 2: Update the user's document in Firestore
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      premiumStatus: "pending",
      screenshotUrl: screenshotUrl,
      paymentMethod: paymentMethod,
      transactionId: transactionId || null,
      submittedAt: serverTimestamp(),
      userName: userData.fullName,
      userEmail: userData.email,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting payment proof:", error);
    throw new Error(`Payment submission failed: ${error.message}`);
  }
};