// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9ezpEadZGUA2GjZMdjjq66KuPBmOKGU",
  authDomain: "netflixcolnes.firebaseapp.com",
  projectId: "netflixcolnes",
  storageBucket: "netflixcolnes.appspot.com",
  messagingSenderId: "938960236790",
  appId: "1:938960236790:web:6145044e65ad04aa8cfcd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

export { app, auth, firestore };
