import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode = {toggleMode}/>
        <Routes>
          <Route path="/" element={<Textarea mode={mode}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="*" element={<Textarea mode={mode}/>} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
