import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKqZGMuCNOCZjBgO7y2KtiXYvXbxBaMtE",
  authDomain: "proyectofinal-6e22c.firebaseapp.com",
  projectId: "proyectofinal-6e22c",
  storageBucket: "proyectofinal-6e22c.appspot.com",
  messagingSenderId: "483315773181",
  appId: "1:483315773181:web:f0d3795066135a2bd11894"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
