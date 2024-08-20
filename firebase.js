// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0JX4OWNxkMpKX8abFETkXlWqsMGdSG2w",
  authDomain: "flashcardsaas-b7406.firebaseapp.com",
  projectId: "flashcardsaas-b7406",
  storageBucket: "flashcardsaas-b7406.appspot.com",
  messagingSenderId: "270391157436",
  appId: "1:270391157436:web:1ad916ae596c35af3826b9",
  measurementId: "G-4K2WGLK01L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}