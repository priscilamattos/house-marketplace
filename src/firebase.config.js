// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9_atTfHhtZ1eiI1r0uZlz6v2wvPlfiU",
  authDomain: "house-marketplace-963bc.firebaseapp.com",
  projectId: "house-marketplace-963bc",
  storageBucket: "house-marketplace-963bc.appspot.com",
  messagingSenderId: "849428499800",
  appId: "1:849428499800:web:18b0bb9316903d0b15e92d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
