// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import the Storage function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkAazjq8zz8Dt9B6oPBWPi7p0_XmhL-p4",
  authDomain: "heckathon-e5480.firebaseapp.com",
  projectId: "heckathon-e5480",
  storageBucket: "heckathon-e5480.appspot.com",
  messagingSenderId: "467898031586",
  appId: "1:467898031586:web:1ac47f05ef11850ecaadbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Firestore, and Storage services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Storage

export default app;
