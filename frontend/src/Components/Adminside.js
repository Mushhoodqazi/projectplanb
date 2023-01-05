import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Subscribers from "./Subscribers";
function Adminside() {
  const navigate = useNavigate();
  const [emailLogs, setEmailLogs] = useState([]);


  const  getEmails = async() =>{
    const { data } = await axios.get("http://localhost:5000/emailLogs");

    console.log(data);
    setEmailLogs(data);
  }

  useEffect(() => {
    getEmails()
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Plan-B Tuition Point
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="" onClick={(e)=>{
                     e.preventDefault()
                  navigate('/Adminside')}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="" onClick={(e)=>{
                  e.preventDefault()
                  navigate('subscribers')}}>
                  View Subscribers
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Add Admin{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        style={{
          marginLeft: "7%",
          marginRight: "7%",
          height: "700px",
          marginTop: "50px",
        }}
      >
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Incorrect Attempts
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/" element={(
            <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">UserName</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {emailLogs.map((item) => (
                <tr>
                  <td>{item.UserName}</td>
                  <td>{item.Password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          )} />
        </Routes>



        
      </div>
    </div>
  );
}

export default Adminside;
