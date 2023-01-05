import axios from "axios";
import React, { useEffect, useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const nav = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const ref = useRef();
  useEffect(()=>ref.current.focus(),[]);
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async(event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        nav("/Adminside");
      }
    } else {
      // Username not found
      console.log(uname.value)
      console.log(pass.value)
      await axios.post("http://localhost:5000/Planb",{UserName: uname.value, Password: pass.value})
    
          alert("You have been caught Bruh!!")
     

        setErrorMessages({ name: "uname", message: errors.uname });
      
    }

   
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input ref={ref} type="text" name="uname" onChange={(e)=>setEmail(e.target.value)}  required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" onChange={(e)=>setPassword(e.target.value)}  required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
       
      </form>
    </div>
  );

    return (
    
    
    <div className="app">
        
      <div className="login-form">
        <div style={{marginLeft:"50px"}} className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      
    </div>
  );
}

export default Login;