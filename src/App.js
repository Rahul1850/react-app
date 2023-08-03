import React ,{ useState} from "react";
import './App.css';
import Navbar from "./Components/Navbar"
import TextArea from "./Components/TextArea"
import About from "./Components/About"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
function App() {

  document.title="TextUtils"
  const[mode,setMode]=useState("light")

  const togleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#100e31"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar mode={mode} togleMode={togleMode}/>
    <TextArea heading="Enter your text below to analyze! " mode={mode} />
    <About mode={mode} />
    {/* <Router>
      <Navbar mode={mode} togleMode={togleMode}/> 
      <Routes>
        <Route exact path="/" element={<TextArea heading="Enter your text below to analyze! " mode={mode} />}>
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/about" element={<About />}>
        </Route>
      </Routes> */}
   
    {/* </Router> */}
    </>
  );
}

export default App;
