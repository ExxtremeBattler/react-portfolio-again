import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import ProjectGallery from "./components/ProjectGallery/projectGallery"
import Contact from "./components/Contact";
import projects from "./projects.json"

function App() {

  return( 
  <Router>
    <Navbar></Navbar>
    <Header></Header>
    <div>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="aboutMe" element = {<Home />} />
        <Route path= "myWork/*" element = {<ProjectGallery />} />
        <Route path= "contactMe" element = {<Contact/>} />
      </Routes>
    </div>

  </Router>
  
        ) 
}

export default App;
