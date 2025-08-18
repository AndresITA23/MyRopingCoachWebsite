import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPWUMCvJay09QijT-UDLxA5Z16FktsOEI",
  authDomain: "myropingcoachweb.firebaseapp.com",
  projectId: "myropingcoachweb",
  storageBucket: "myropingcoachweb.firebasestorage.app",
  messagingSenderId: "510799315722",
  appId: "1:510799315722:web:14aee8a2bd3ac98d8830f3",
  measurementId: "G-GBFVMCR8QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export { storage, ref, listAll, getDownloadURL};
const analytics = getAnalytics(app);