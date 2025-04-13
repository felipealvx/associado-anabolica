import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5ECtGLHWaQcIG8mBdolf7s5m5_UBZwY",
  authDomain: "cracha-gen.firebaseapp.com",
  projectId: "cracha-gen",
  storageBucket: "cracha-gen.firebasestorage.app",
  messagingSenderId: "772186005088",
  appId: "1:772186005088:web:f3dbd60acf18a341c2ed05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth }; 