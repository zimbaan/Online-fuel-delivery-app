// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, setDoc, doc, getDocs } from "firebase/firestore";
import { getDatabase, ref, set, update, onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  


  apiKey: "AIzaSyDtk-CoiNazXCAXJXDC5QmkBdjgOBanESE",
  authDomain: "onlinefueldeliverysystem.firebaseapp.com",
  databaseURL: "https://onlinefueldeliverysystem-default-rtdb.firebaseio.com",
  projectId: "onlinefueldeliverysystem",
  storageBucket: "onlinefueldeliverysystem.appspot.com",
  messagingSenderId: "1093082553971",
  appId: "1:1093082553971:web:f2d4ecfc2d52ec0fdb9406",
  measurementId: "G-HY91B7PS2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase();
export const auth = getAuth(app);

export { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, signOut, GoogleAuthProvider };
export { getDocs, addDoc, collection, setDoc, doc };
export { ref, set, update, onValue };
