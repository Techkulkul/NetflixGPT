import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuboDtW2eixti0Qq3Kf3bDbWuNu8nG5RA",
  authDomain: "netflixgpt-34050.firebaseapp.com",
  projectId: "netflixgpt-34050",
  storageBucket: "netflixgpt-34050.firebasestorage.app",
  messagingSenderId: "1091471978680",
  appId: "1:1091471978680:web:1b23f98a1544a88922044d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
