// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-wgY_kG7R6pCdiZmnD3nynalF1eIrRm8",
  authDomain: "blogapp-9323c.firebaseapp.com",
  projectId: "blogapp-9323c",
  storageBucket: "blogapp-9323c.appspot.com",
  messagingSenderId: "600529548170",
  appId: "1:600529548170:web:9c874492422fcd9cd04e73",
  measurementId: "G-NLS6FLF3GB"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { auth, provider };