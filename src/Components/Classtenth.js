import React from "react";
import { Link } from "react-router-dom";

function Classtenth() {
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




<div>
  
<div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
<div class="card h-100">
  <img src="english.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
 
    <h5 class="card-title">English</h5>
   
  </div>
</div>
</div>


<div class="col">
<div class="card h-100">
  <img src="maths.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Maths</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card h-100">
  <img src="physics.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Physics</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4" style={{height:"450px"}}>
<div class="col">
<div class="card h-100">
  <img src="chemestry.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Chemestry</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>

<div class="col" style={{height:"450px"}}>
<div class="card h-100">
  <img src="bio.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Biology</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
</div>
<div class="col" style={{height:"450px"}}>
<div class="card h-100">
  <img src="urdu.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Urdu</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
</div>
</div>









</div>

    );
}

export default Classtenth;