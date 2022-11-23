import React from "react";
import "./style.css";

export default function App() {
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
