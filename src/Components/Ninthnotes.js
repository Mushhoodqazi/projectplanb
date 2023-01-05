import React from "react";
import { Link } from "react-router-dom";
import Pdf from '../Components/englishnotes.pdf';
function Ninthnotes() {
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

<div className = "App">
          <a href = {Pdf} target = "_blank">View Pdf</a>
        </div>
        </div>
     );
}

export default Ninthnotes;