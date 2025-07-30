// src/firebase/payments.ts
import { db } from "./config";
import { doc, setDoc, collection } from "firebase/firestore";

interface PaymentSubmission {
  userId: string;
  fullName: string;
  email: string;
  paymentMethod: 'ebirr' | 'telebirr';
  screenshotBase64: string;
  transactionId?: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: Date;
  amount: number;
}

export async function submitPaymentProof(
  userId: string,
  paymentMethod: 'ebirr' | 'telebirr',
  screenshotFile: File,
  transactionId?: string,
  userData?: { fullName?: string; email?: string }
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async () => {
      try {
        const result = reader.result as string;
        const base64String = result.startsWith('data:') 
          ? result.split(',')[1] 
          : result;

        // Validate required fields
        if (!userId) throw new Error('User ID is required');
        if (!paymentMethod) throw new Error('Payment method is required');
        
        const docRef = doc(collection(db, 'paymentSubmissions'));
        
        const paymentData: PaymentSubmission = {
          userId,
          fullName: userData?.fullName || 'Unknown',
          email: userData?.email || 'unknown@example.com',
          paymentMethod,
          screenshotBase64: base64String,
          transactionId: transactionId || '',
          status: 'pending',
          submittedAt: new Date(),
          amount: 200
        };

        await setDoc(docRef, paymentData);
        resolve(docRef.id);
      } catch (error) {
        console.error('Error submitting payment proof:', error);
        reject(error instanceof Error ? error : new Error('Payment submission failed'));
      }
    };
    
    reader.onerror = () => reject(new Error('File reading failed'));
    reader.readAsDataURL(screenshotFile);
  });
}