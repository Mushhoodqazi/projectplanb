import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import Footermd from "./Footermd";
import Footertwo from "./Footertwo";


function Courses() {
  const navigate = useNavigate(null);
  const handleNavigate = ()=>
  {
    navigate("/");
  }
    return (  
      <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" style={{cursor:"pointer"}} onClick={handleNavigate}>Plan-B Tuition Point</a>
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
<img src="courses.jpg" alt="courses" />;
<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"style={{marginLeft:"7%", marginRight:"7%",  height:"700px", marginTop:"50px" }}>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Courses</a></li>
       
      </ol>
    </nav>
  </div>
</nav>


<div class="card" style={{width:"500px", height:"250px", marginLeft:"50px", marginTop:"50px"}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:"40px"}}>Class IX</h5>
    <p class="card-text" style={{fontSize:"20px"}}>Class ninth notes for general science</p>
    <Link to="/Classninth">
    <button type="button" class="btn btn-primary">Visit</button>
    </Link>
  </div>
</div>

<div class="card" style={{width:"500px", height:"250px", marginLeft:"50px", marginTop:"50px"}}>
  <div class="card-body">
    <h5 class="card-title"style={{fontSize:"40px"}}>Class X</h5>
    <p class="card-text"style={{fontSize:"20px"}}>Class tenth notes for general science</p>
    <Link to="/Classtenth">
    <button type="button" class="btn btn-primary">Visit</button>
    </Link>
  </div>
</div>

<div style={{marginLeft:"700px", marginTop:"-600px"}}>
<div class="card" style={{width:"500px", height:"250px", marginLeft:"50px", marginTop:"50px"}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:"40px"}}>Class XI</h5>
    <p class="card-text" style={{fontSize:"20px"}}>Class eleventh notes for general science</p>
    <Link to="/Classeleventh">
    <button type="button" class="btn btn-primary">Visit</button>
    </Link>
  </div>
</div>

<div class="card" style={{width:"500px", height:"250px", marginLeft:"50px", marginTop:"50px"}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:"40px"}}>Class XII</h5>
    <p class="card-text" style={{fontSize:"20px"}}>Class twelvth notes for general science</p>
    <Link to="/Classtwelth">
    <button type="button" class="btn btn-primary">Visit</button>
    </Link>
  </div>
</div>
</div>








</div>

<Footertwo/>



</div>   
    );
}

export default Courses;
