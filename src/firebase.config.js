import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiaj_g6eJrYoBVVfQCBI-UV7h1qky3kCM",
  authDomain: "sweet-life-c5308.firebaseapp.com",
  projectId: "sweet-life-c5308",
  storageBucket: "sweet-life-c5308.appspot.com",
  messagingSenderId: "301684893359",
  appId: "1:301684893359:web:a0fd5585305dd37c6d965a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()