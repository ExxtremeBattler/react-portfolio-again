import React from "react";
import "./style.css"
import Project from "../Project/project";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

import projects from "../../projects.json"

 function project1() {

return(
    <Project title = {projects[0].title} 
    image = {projects[0].image}
    repoLink = {projects[0].repoLink}
    deployLink = {projects[0].deployLink}/>
)}

function project2() {

    return(
        <Project title = {projects[1].title} 
        image = {projects[1].image}
        repoLink = {projects[1].repoLink}
        deployLink = {projects[1].deployLink}/>
)}

function project3() {

        return(
            <Project title = {projects[2].title} 
            image = {projects[2].image}
            repoLink = {projects[2].repoLink}
            deployLink = {projects[2].deployLink}/>
)}

function project4() {

        return(
            <Project title = {projects[3].title} 
            image = {projects[3].image}
            repoLink = {projects[3].repoLink}
            deployLink = {projects[3].deployLink}/>
)}
    
function project5() {

            return(
                <Project title = {projects[4].title} 
                image = {projects[4].image}
                repoLink = {projects[4].repoLink}
                deployLink = {projects[4].deployLink}/>
)}

function project6() {

    return(
        <Project title = {projects[5].title} 
        image = {projects[5].image}
        repoLink = {projects[5].repoLink}
        deployLink = {projects[5].deployLink}/>
)}



// project2 = () => {

//     return(
//         <div className="project2">
//     <Project title = {projects[1].title} 
//     image = {projects[1].image}
//     repoLink = {projects[1].repoLink}
//     deployLink = {projects[1].deployLink}/>
// </div>
//     )
// }

function ProjectGallery() {

    

    return(

        <section class="page-section work " id="myWork" >

      <h2>Work </h2>
      
      <div class="vertical"> </div>
      <section id="projectGrid">

        <div className="ProjectGallery">


<Link to="project1" role="button" className="btn btn-link" > {projects[0].title} </Link>
<Link to="project2" role="button" className="btn btn-link" > {projects[1].title} </Link>
<Link to="project3" role="button" className="btn btn-link" > {projects[2].title} </Link>
<Link to="project4" role="button" className="btn btn-link" > {projects[3].title} </Link>
<Link to="project5" role="button" className="btn btn-link" > {projects[4].title} </Link>
<Link to="project6" role="button" className="btn btn-link" > {projects[5].title} </Link>

<Routes> 
    <Route path="project1" element= {project1()}> </Route>
    <Route path="project2" element= {project2()}> </Route>
    <Route path="project3" element= {project3()}> </Route>
    <Route path="project4" element= {project4()}> </Route>
    <Route path="project5" element= {project5()}> </Route>
    <Route path="project6" element= {project6()}> </Route>


</Routes>





{/* <div className="project 1">

<Project title = {projects[0].title} 
    image = {projects[0].image}
    repoLink = {projects[0].repoLink}
    deployLink = {projects[0].deployLink}/>

    </div>
    


<div className="project3">
<Project title = {projects[2].title} 
    image = {projects[2].image}
    repoLink = {projects[2].repoLink}
    deployLink = {projects[2].deployLink}/>
    </div>

<div className="project4">
<Project title = {projects[3].title} 
    image = {projects[3].image}
    repoLink = {projects[3].repoLink}
    deployLink = {projects[3].deployLink}/>

</div>

<div className="project5">
<Project title = {projects[4].title} 
    image = {projects[4].image}
    repoLink = {projects[4].repoLink}
    deployLink = {projects[4].deployLink}/>
    </div>

    <div className="project6">
<Project title = {projects[5].title} 
    image = {projects[5].image}
    repoLink = {projects[5].repoLink}
    deployLink = {projects[5].deployLink}/>
    </div> */}


</div>
</section>
</section>
    )
}

export default ProjectGallery;
