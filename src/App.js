import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js"
import Textform from "./components/Textform.js"
import About from "./components/About.js"
import Alert from "./components/Alert.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[btnText,setBtnText]=useState('Enable Dark Mode')
  const [mode1,setMode1]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const [alert,setAlert]=useState(null)
  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
            setAlert(null)
        },1500)
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      setMode1({
    color:'black',
    backgroundColor:'white'
  })
  setBtnText('Enable Dark Mode')
  document.body.style.backgroundColor='white'

  showAlert('Dark Mode Disabled','Success')
    }
    else{
      setMode('dark')
      setMode1({
    color:'white',
    backgroundColor:'#032d52'
  })
  setBtnText('Disable Dark Mode')
  document.body.style.backgroundColor='#032d52'

  showAlert('Dark Mode Enabled','Success')
    }
  }



  return (
    <>
    <Router>
    <Navbar title="Nav" AboutText="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode1={mode1} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
