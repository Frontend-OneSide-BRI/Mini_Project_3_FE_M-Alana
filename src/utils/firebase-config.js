// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALE4vbtjziAUJaLy8kbxTKXFu1YRNvv4I",
  authDomain: "react-demovies-8d5d9.firebaseapp.com",
  projectId: "react-demovies-8d5d9",
  storageBucket: "react-demovies-8d5d9.appspot.com",
  messagingSenderId: "328642318538",
  appId: "1:328642318538:web:3de4aa8c27d29c065e2433",
  measurementId: "G-RF79P1B16T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);