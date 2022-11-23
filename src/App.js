import React from "react";
import {useState} from 'react';
import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHbuG3-XTLTwVlMBHF0_cdgmLWYMIC7e0",
  authDomain: "contactform2-f9330.firebaseapp.com",
  databaseURL: "https://contactform2-f9330-default-rtdb.firebaseio.com",
  projectId: "contactform2-f9330",
  storageBucket: "contactform2-f9330.appspot.com",
  messagingSenderId: "404463780033",
  appId: "1:404463780033:web:fe3d3f80b17499f653d440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  const [userInfo , setUserInfo] = useState({});

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input 
        type="text"
        className="name"
        placeholder="Name"
      />
      <input 
        type="email"
        className="email"
        placeholder="Email"
      />
      <input 
        type="number"
        className="age"
        placeholder="Age"
      />
      <button>Submit</button>
    </div>
  );
}
