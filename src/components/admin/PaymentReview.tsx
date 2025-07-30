import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Check, X, Loader, User, Clock, ZoomIn } from 'lucide-react';
import { format } from 'date-fns';

interface PaymentSubmission {
  id: string;
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

export default function PaymentReviewDashboard() {
  const [payments, setPayments] = useState<PaymentSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'paymentSubmissions'),
      where('status', '==', 'pending')
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const paymentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PaymentSubmission[];
      setPayments(paymentsData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleVerify = async (submissionId: string, status: 'verified' | 'rejected') => {
    setProcessing(submissionId);
    try {
      // Update payment status
      await updateDoc(doc(db, 'paymentSubmissions', submissionId), {
        status,
        reviewedAt: new Date(),
        reviewedBy: 'admin'
      });

      // If verified, upgrade user
      if (status === 'verified') {
        const payment = payments.find(p => p.id === submissionId);
        if (payment) {
          await updateDoc(doc(db, 'users', payment.userId), {
            isPremium: true,
            premiumSince: new Date()
          });
        }
      }
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setProcessing(null);
    }
  };

  if (loading) return <div className="flex justify-center p-8"><Loader className="animate-spin" /></div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={`data:image/jpeg;base64,${selectedImage}`} 
              className="max-w-full max-h-[80vh] object-contain"
              alt="Payment proof" 
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2"
            >
              <X className="text-white" size={24} />
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Clock className="text-amber-500" />
        Pending Payment Verifications
      </h1>
      
      {payments.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-500">No pending payments</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {payments.map((payment) => (
            <div key={payment.id} className="border rounded-xl p-4 bg-white">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User className="text-blue-600" size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{payment.fullName}</h3>
                  <p className="text-sm text-gray-600">{payment.email}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  payment.paymentMethod === 'telebirr' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {payment.paymentMethod}
                </span>
              </div>

              <div className="mb-3">
                <p className="text-sm">
                  <span className="font-medium">Amount:</span> {payment.amount} Birr
                </p>
                <p className="text-sm">
                  <span className="font-medium">Submitted:</span> {format(payment.submittedAt, 'PPpp')}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(payment.screenshotBase64)}
                className="flex items-center gap-1 text-sm mb-3"
              >
                <ZoomIn size={14} /> View Proof
              </button>

              <div className="flex gap-2 border-t pt-3">
                <button
                  onClick={() => handleVerify(payment.id, 'verified')}
                  disabled={processing === payment.id}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-800 p-2 rounded"
                >
                  {processing === payment.id ? <Loader className="animate-spin" size={14} /> : <Check size={14} />}
                  Approve
                </button>
                <button
                  onClick={() => handleVerify(payment.id, 'rejected')}
                  disabled={processing === payment.id}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-800 p-2 rounded"
                >
                  {processing === payment.id ? <Loader className="animate-spin" size={14} /> : <X size={14} />}
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}