// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhzl8BySJ99vlDsPhejrspMzUYJNVEWM",
  authDomain: "app-tare1.firebaseapp.com",
  databaseURL: "https://app-tare1-default-rtdb.firebaseio.com",
  projectId: "app-tare1",
  storageBucket: "app-tare1.firebasestorage.app",
  messagingSenderId: "166311231769",
  appId: "1:166311231769:web:0ee9b74a7a56c11dbac588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getDatabase(app);