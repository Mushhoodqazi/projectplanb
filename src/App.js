import React from "react";
import Carosol from "../src/Components/Carosol";
import Navbar from "../src/Components/Navbar";

import { Route, Routes } from "react-router-dom";
import Cards from "../src/Components/Cards";
// import Footer from "./Components/Footer";
import Admin from "../src/Components/Admin";
import Courses from "../src/Components/Courses";
import Classninth from "../src/Components/Classninth";
import Classtenth from "../src/Components/Classtenth";
import Fsctwo from "../src/Components/Fsctwo";
import Fscone from "../src/Components/Fscone";
import Ninthnotes from "../src/Components/Ninthnotes";
import Englishnine from "./Components/Englishnine";
import Adminside from "./Components/Adminside";








function App() {
  return (
    <div>
    <Carosol/>
<Cards/>

 <Routes>
     <Route path="/" element= {<Navbar/>}/>
     {/* <Route path="/Login" element={<Login/>}/>
     <Route path="/Loginstd" element={<Loginstd/>}/>
     <Route path="/Signupthr" element={<Signupthr/>}/>
     <Route path="/Signupstud" element={<Signupstud/>}/> */}
     <Route path="/Courses" element={<Courses/>}/>
     <Route path="./Admin" element={<Admin/>}/>
   </Routes> 
   <Routes>
    {/* <Route path="/" element={<Footer/>}/> */}
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Classninth" element={<Classninth/>}/>
    <Route path="/Classtenth" element={<Classtenth/>}/>
    <Route path="/Fsctwo" element={<Fsctwo/>}/>
    <Route path="/Fscone" element={<Fscone/>}/>
    <Route path="/Ninthnotes" element={<Ninthnotes/>}/>
    <Route path="/Englishnine" element={<Englishnine/>}/>
    <Route path="/Adminside" element={<Adminside/>}/>
  

   </Routes>

</div>
  );
}

export default App;
