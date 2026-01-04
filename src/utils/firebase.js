// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8uTGSywkTO5AtAisYasMPMhRPKAgNoWE",
  authDomain: "netflixgpt-7f4cf.firebaseapp.com",
  projectId: "netflixgpt-7f4cf",
  storageBucket: "netflixgpt-7f4cf.firebasestorage.app",
  messagingSenderId: "955522575622",
  appId: "1:955522575622:web:60349a1a62e96a6e2cc287",
  measurementId: "G-GTWK83GH6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();