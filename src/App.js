import React, { useState } from "react";
import Main from "./Components/Main"
import Info from "./Components/Info"
import './App.css';

const App = () => {
const[state, setState] = useState(Info) 
  return(
     <>
    <Main state= {state} /> 
     </>
)}

export default App;
