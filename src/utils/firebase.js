// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-cdf12.firebaseapp.com",
  projectId: "blog-cdf12",
  storageBucket: "blog-cdf12.appspot.com",
  messagingSenderId: "757160428332",
  appId: "1:757160428332:web:ee9bb2d3e1b76a85c92289"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);