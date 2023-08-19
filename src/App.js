//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Alert  from "./components/Alert";
import {useState} from "react";



function App() {
  const [alert, setAlert] = useState('this is an alert')
  const onAlert = (message, type)=>{};
  return (
  <>
     <Navbar feature="Updates"/>
    <button> a </button>
    <Alert alert={"dhb"}/>

  </>
  );
}

export default App;
