import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Footertwo from "./Footertwo";
import GetTutor from "./Gettutor";

function Classninth() {
    return (
         <div>

            <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" style={{cursor:"pointer"}} >Plan-B Tuition Point</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="Classninth">
          <a class="nav-link" href="#">Class IX</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="Classtenth">
          <a class="nav-link" href="#">Class X</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="Fscone">
          <a class="nav-link" href="#">Class XI</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="Fsctwo">
          <a class="nav-link" href="#">Class XII</a>
          </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>

<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{marginLeft:"7%", marginRight:"7%", height:"700px", marginTop:"20px" }}>

<div class="card" style={{margintop:"20px"}}>
  <div class="card-header"><h4 style={{align:"center"}}>About this course<span class="badge badge-primary">New</span></h4></div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>ICS stands for Intermediate in Computer Science. It is a higher secondary school certificate with a major in Computer Science. ICS is for a duration of 2 years and is an alternative for FSC (Pre-Engineering). This qualification is designed for those candidates who are seeking their career in Software Engineering, Telecommunication, Electronics, Nanotechnology, Space Sciences, BS Physics, BS Computational Physics, BS Mathematics. The qualification is two years and is assessed on yearly basis by different Boards of intermediate and Secondary Education. Following are subjects are the constituent of the Qualification</p>
     
    </blockquote>
  </div>
</div>

<ul class="list-group" style={{width:"700px",  marginTop:"50px", marginLeft:"300px"}}>
  <Link to="/Englishnine">
  <li class="list-group-item" style={{fontSize:"25px", textAlign:"center"}}>English</li>
  </Link>
  <li class="list-group-item"style={{fontSize:"25px", textAlign:"center"}}>Physics</li>
  <li class="list-group-item"style={{fontSize:"25px", textAlign:"center"}}>Chemestry</li>
  <li class="list-group-item"style={{fontSize:"25px", textAlign:"center"}}>Computer</li>
  <li class="list-group-item"style={{fontSize:"25px",textAlign:"center"}}>Geography</li>
</ul>












</div>
<Footertwo/>

</div>








);
}

export default Classninth;