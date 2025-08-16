import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyAzfwfyT9caQcrVTx5o1vzffXGLxM2oloQ",
  authDomain: "fresh-hub-7c05a.firebaseapp.com",
  projectId: "fresh-hub-7c05a",
  storageBucket: "fresh-hub-7c05a.appspot.com", // ✅ FIX: correct storageBucket domain
  messagingSenderId: "194682614599",
  appId: "1:194682614599:web:370e0a6572bf11ca085262",
  measurementId: "G-91073T81JH"
};

const app = initializeApp(firebaseConfig);

// ✅ Export auth, firestore, and storage
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache()
});
export const storage = getStorage(app); // ✅ Add this line

export default app;
