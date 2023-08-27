import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"


function Navbar() {

    return(

        <div className="Navbar">

      <nav className="navbar navbar-expand-lg navbar-light bg-red">
    
    <a className="navbar-brand" href="#">ExxtremeBattler!</a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item active">
          <Link  className="nav-link" role="button" to="aboutMe"> Home <span className="sr-only"></span></Link >
        </li>
        
        <li className="nav-item active">
          <Link  className="nav-link" role="button" to="myWork"> Projects <span className="sr-only"></span></Link >
        </li>
        
        <li className="nav-item active">
          <Link  className="nav-link" role="button" to="contactMe"> Contact Me <span className="sr-only"></span></Link >
        </li>
      
      </ul>
      

    </div>
  
  </nav>
</div>
    )
}

export default Navbar;