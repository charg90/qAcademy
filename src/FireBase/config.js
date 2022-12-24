// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr79N9TFKvhcOCNA5Xz6KPto2do38n7_I",
  authDomain: "qcapital-442a8.firebaseapp.com",
  projectId: "qcapital-442a8",
  storageBucket: "qcapital-442a8.appspot.com",
  messagingSenderId: "1018352652065",
  appId: "1:1018352652065:web:deacd79bcdd55c3a6a3860",
  measurementId: "G-MZB40XTM0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
