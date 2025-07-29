import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzfwfyT9caQcrVTx5o1vzffXGLxM2oloQ",
  authDomain: "fresh-hub-7c05a.firebaseapp.com",
  projectId: "fresh-hub-7c05a",
  storageBucket: "fresh-hub-7c05a.firebasestorage.app",
  messagingSenderId: "194682614599",
  appId: "1:194682614599:web:370e0a6572bf11ca085262",
  measurementId: "G-91073T81JH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled in one tab at a time
      console.warn('Offline persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the features required
      console.warn('Current browser does not support offline persistence');
    }
  });

export default app;