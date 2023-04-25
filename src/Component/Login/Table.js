import { useEffect, useState } from "react";
import {Table}  from "react-bootstrap";

function TablePage() {
    const [data,setData] = useState([]);
    const fetchData = () =>{
        fetch('http://localhost:3001/user')
        // then((res)=>res.json())
        .then((res) => {
            return res.json();
        })
        .then((actualData) => {
           // console.log(actualData);
            setData(actualData);
            //console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    useEffect(()=>{
       fetchData(); 
    });
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div></div>
    </div>
  );
}

export default TablePage;
