import React,{useState} from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

const App = () => {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
    return (
    <>
    <NoteState>
      <Router>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About showAlert={showAlert}/>} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/contact" element={<Contact showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
};

export default App;
