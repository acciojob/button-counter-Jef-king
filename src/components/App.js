
import React from "react";
import './../styles/App.css';
import {useState} from "react";
const App = () => {
  const[count, setCount]=useState(0);
  function hello(){
    setCount(count+1);
  }
  return (
    <div>
        <p id='t'>Button clicked {count} times</p>
        <button onClick={hello}>Click me</button>
    </div>
  )
}

export default App
