import React from "react";
import {useState} from 'react';
import "./style.css";

export default function App() {
  const [userInfo , setUserInfo] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState();

  const handleName = (e) =>{
    setName(e.target.value);
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handleNumber = (e) =>{
    setNumber(e.target.value);
  }

  const assignUser = () =>{
    setUserInfo({
      name: name,
      email: email,
      age: number,
    });
    console.log(userInfo);
  }
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input 
        onChange={handleName}
        type="text"
        className="name"
        placeholder="Name"
        value={name}
      />
      <input 
        type="email"
        className="email"
        placeholder="Email"
        onChange={handleEmail}
        value={email}
      />
      <input 
        type="number"
        className="age"
        placeholder="Age"
        onChange={handleNumber}
        value={number}
      />
      <button onClick={assignUser}>Submit</button>
    </div>
  );
}
