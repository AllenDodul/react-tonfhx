import React from "react";
import {useState} from 'react';
import "./style.css";

const App = () =>{
  return(
    <div className="from-container">
    <div id="form">
      <input 
        type="text" 
        className="name" 
        placeholder="Enter Your name"
      />
      <input 
        type="email" 
        className="email" 
        placeholder="Enter Your Email"
      />
      <input 
        type="text"
        className="roll"
        placeholder="Enter your Roll number"
      />
      <input 
        type="text"
        className="class"
        placeholder="Enter your class"
      />
      <button type="submit" className="button">Submit</button>
    </div>
  </div>
  )
}
export default App;