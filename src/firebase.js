// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdkByPVYwnPC89WAAZq_0xI8K0fNETkg0",
  authDomain: "grad-hackathon-f1199.firebaseapp.com",
  projectId: "grad-hackathon-f1199",
  storageBucket: "grad-hackathon-f1199.appspot.com",
  messagingSenderId: "1057920294686",
  appId: "1:1057920294686:web:4fa660d328d0d8a2bab30f",
  measurementId: "G-Q1MYQEQ3J7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
