// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBv-O_nuRswyo6vD8mnGDuCl__LoqPKc",
  authDomain: "pixxiei.firebaseapp.com",
  projectId: "pixxiei",
  storageBucket: "pixxiei.appspot.com",
  messagingSenderId: "235282125118",
  appId: "1:235282125118:web:d1b8d2e6b6a3827deb5c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);