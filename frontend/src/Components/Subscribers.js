import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Subscribers = () => {

    const [subscribersLogs, setSubscribersLogs] = useState([]);


    const getSubscribers = async()=>{
        const { data } = await axios.get("http://localhost:5000/subscribers");
  
        console.log(data);
        setSubscribersLogs(data);
    }
    useEffect( () => {
     getSubscribers()
    }, []);

  return (
    <div>
         <table className="table">
            <thead>
              <tr>
                <th scope="col">Subscribers</th>
                {/* <th scope="col">Password</th> */}
              </tr>
            </thead>
            <tbody>
                
              {subscribersLogs.map((item) => (
                <tr>
                  <td>{item.email}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default Subscribers