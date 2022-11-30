import React from "react";
import {useState} from 'react';
import "./style.css";

//Firebase setup
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase ,set ,get ,ref ,child ,update ,remove } from 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBiBgaGd5stuR2KZQX4oVKcvpnVK4jk3Bc",
  authDomain: "studentdataform-3daa3.firebaseapp.com",
  databaseURL: "https://studentdataform-3daa3-default-rtdb.firebaseio.com",
  projectId: "studentdataform-3daa3",
  storageBucket: "studentdataform-3daa3.appspot.com",
  messagingSenderId: "945037989528",
  appId: "1:945037989528:web:78f8722be22e2266e6a2ed",
  measurementId: "G-BKNXYBHC45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

//Firebase setup



const App = () =>{
  const [name ,setName] = useState('');
  const [email, setEmail] = useState('');
  const [roll, setRoll] = useState('');
  const [clas, setClas] = useState('');

  const handleName = (e) =>{
    setName(e.target.value);
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  
  const handleRoll = (e) =>{
    setRoll(e.target.value)
  }

  const handleClas = (e) =>{
    setClas(e.target.value);
  }

  const showData =() =>{
    insertData()
  }

  //insert Data
  const insertData = () =>{
    set(ref(database ,'Student/' + roll),{
      name: name,
      roll: roll,
      clas: clas,
      email: email 
    })
    .then(()=>{
      alert('Data Added Sucesfully...')
    })
    .catch((error)=>{
      alert('Unsucesfull ' + error);
    })
  }

  return(
    <div className="from-container">
    <div id="form">
      <input 
        type="text" 
        className="name" 
        placeholder="Enter Your name"
        onChange={handleName}
        value={name}
      />
      <input 
        type="email" 
        className="email" 
        placeholder="Enter Your Email"
        onChange={handleEmail}
        value={email}
      />
      <input 
        type="text"
        className="roll"
        placeholder="Enter your Roll number"
        onChange={handleRoll}
        value={roll}
      />
      <input 
        type="text"
        className="class"
        placeholder="Enter your class"
        onChange={handleClas}
        value={clas}
      />
      <button 
        type="submit" 
        className="button"
        onClick={showData}
      >
        Submit
      </button>
    </div>
  </div>
  )
}
export default App;