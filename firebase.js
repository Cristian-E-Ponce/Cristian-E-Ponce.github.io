// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-z6IgK5taA1znunC9WRWJeTMxu7K07o",
  authDomain: "fir-crud-33132.firebaseapp.com",
  projectId: "fir-crud-33132",
  storageBucket: "fir-crud-33132.appspot.com",
  messagingSenderId: "845976642078",
  appId: "1:845976642078:web:e8f99cd887dc4b1661840f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



//---------------------------[ C R U D]-----------------------------------------------//
const db = getFirestore();