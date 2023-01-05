// import "D:/tuitionpoint/src/Components/Navbarcss.css";
import "./Navbarcss.css"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { detail } from "./Context";
import Footertwo from "./Footertwo";
import Footermd from "./Footermd";

function Navbar() {

  const Navigate = useNavigate()
  const handleNavigate = ()=>
  {
    Navigate("/");
  }
  
  const mydetail = useContext(detail);
  return (
    <div>
      <div>
         <img  src="pexels-pixabay-220201.jpg" alt=""></img> 
       
      <div  class="shadow-lg p-3 mb-5 bg-body rounded" style={{marginTop:"-1400px",marginLeft:"150px", width:"1200px", Height:"900px"}}>
       <div >
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="cover.png" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="cover.png" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="cover.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
      </div>
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" style={{cursor:"pointer"}} onClick={handleNavigate} >Plan-B Tuition Point</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Plan-B Tuition Point</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" >Home</a>
            </li>
           <li class="nav-item">
            <Link to="/Courses">
              <a class="nav-link active" aria-current="page" >Courses</a>
              </Link>
            </li> 
            {/* {/* <li class="nav-item">
              <a class="nav-link" >Sign In</a>
            </li> */}
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  >
             Log In
              </a>
              
              {/* <ul class="dropdown-menu dropdown-menu-dark"> */}
              {/* <Link to="/Login">
                <li><a class="nav-link active" >As Teacher</a></li>
                </Link>
                <Link to="/Loginstd">
                <li><a class="dropdown-item" >As Student</a></li>
                </Link> */} 
                {/* <li>
                  <hr class="dropdown-divider"/>
                </li> */}
               
              {/* </ul> */}
            {/* </li> */}
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sign up
              </a>
              
              <ul class="dropdown-menu dropdown-menu-dark">
              <Link to="/Signupthr">
                <li><a class="dropdown-item" >As Teacher</a></li>
                </Link>
                <Link to="/Signupstud">
                <li><a class="dropdown-item" >As Student</a></li>
                </Link>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
               
              </ul>
            </li> */}
          </ul> 
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  <div style={{Height:"400px", width:"400px", marginLeft:"30px"}}>
  <div class="list-group">
  <a style={{textAlign:"center"}} href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Introduction
  </a>
  <a href="#" class="list-group-item list-group-item-action">{mydetail.description}</a>
 
</div>
  </div>

  <div style={{Height:"400px", width:"400px", marginLeft:"550px", marginTop:"-200px"}}>
  <div class="list-group">
  <a style={{textAlign:"center"}} href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Teaching Methods
  </a>
  <a href="#" class="list-group-item list-group-item-action">{mydetail.description}</a>
 
</div>
  </div>

  <div style={{Height:"400px", width:"400px", marginLeft:"1060px", marginTop:"-200px"}}>
  <div class="list-group">
  <a style={{textAlign:"center"}} href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Courses
  </a>
  <a href="#" class="list-group-item list-group-item-action">{mydetail.description}</a>
 
</div>
  </div>
  <div className="Footer-css">
  <Footertwo/>
  </div>
  </div>

  
  );
}

export default Navbar;