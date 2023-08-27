import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Project(props) {
  
  return (
    <div id="project" className="projectGridArea">

          <div class="card">
            <img src={props.image} class="card-img-top" alt= {props.title} ></img>
            <div class="card-body">
              <h5 class="card-title"> {props.title}</h5>
              <p class="card-text">Deploy Link : {props.deployLink} <br></br>
              Repo Link : {props.repoLink} </p>

            </div>
          </div>
          </div>
  )
}


export default Project;
