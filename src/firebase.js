// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from   'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjw8WuNAkXr0BBOE6XGqOTXr96hh9g0iM",
  authDomain: "react-app-ff034.firebaseapp.com",
  databaseURL: "https://react-app-ff034-default-rtdb.firebaseio.com",
  projectId: "react-app-ff034",
  storageBucket: "react-app-ff034.appspot.com",
  messagingSenderId: "954710764711",
  appId: "1:954710764711:web:8f2a6f91a449665f12ff82",
  measurementId: "G-2XBDG479SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export const database = getAuth(app)