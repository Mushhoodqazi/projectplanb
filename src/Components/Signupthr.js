// function Signupthr() {
//     return ( <div style={{width:"800px",height:"800px",marginLeft:"350px", marginBottom:"100px"}}>
//        <div class="shadow-lg p-3 mb-5 bg-body rounded">
//         <form class="row g-3">
//             <div class="row g-3">
//   <div class="col">
//     <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
//   </div>
//   <div class="col">
//     <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
//   </div>
// </div>
//         <div class="col-md-6">
           
//           <label for="inputEmail4" class="form-label">Email</label>
//           <input type="email" class="form-control" id="inputEmail4"/>
//         </div>
//         <div class="col-md-6">
//           <label for="inputPassword4" class="form-label">Password</label>
//           <input type="password" class="form-control" id="inputPassword4"/>
//         </div>
//         <div class="col-12">
//           <label for="inputAddress" class="form-label">Address</label>
//           <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
//         </div>
//         <div class="col-12">
//           <label for="inputAddress2" class="form-label">Address 2</label>
//           <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//         </div>
//         <div class="col-md-6">
//           <label for="inputCity" class="form-label">City</label>
//           <input type="text" class="form-control" id="inputCity"/>
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">State</label>
//           <select id="inputState" class="form-select">
//             <option selected>Choose...</option>
//             <option>...</option>
//           </select>
//         </div>
//         <div class="col-md-2">
//           <label for="inputZip" class="form-label">Zip</label>
//           <input type="text" class="form-control" id="inputZip"/>
//         </div>
//         <div class="col-12">
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" id="gridCheck"/>
//             <label class="form-check-label" for="gridCheck">
//               Check me out
//             </label>
//           </div>
//         </div>
//         <div class="col-12">
//           <button type="submit" class="btn btn-primary">Sign up</button>
//         </div>
//       </form>
//       </div>
//       </div>
//      );
// }

// export default Signupthr;
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Signupthr.css";

function Signupthr() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      // username: "user1",
      // password: "pass1"
    },
    {
      // username: "user2",
      // password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, fname, lname, email} = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
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
          <label>First Name </label>
          <input type="text" name="fname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>E-Mail</label>
          <input type="text" name="email" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
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
        <div className="title">Register As Teacher</div>
        {isSubmitted ? <div>Registered sucessfull</div> : renderForm}
      </div>
      
    </div>
  );
}

export default Signupthr;