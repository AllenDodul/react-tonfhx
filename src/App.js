import React from "react";
import {useState} from 'react';
import "./style.css";

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