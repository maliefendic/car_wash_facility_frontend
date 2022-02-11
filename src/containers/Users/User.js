import React, { useState, useEffect } from "react";
import "./User.css";
import { GetUsers } from "../../services";

function User() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const getAllUsers = async () => {
    GetUsers(1, 100000, "", "createdAt", "asc")
      .then((response) => {
        setData([...response?.data?.rows]);
        setCount(response?.data?.count);
      })
      .catch(function (error) {
        alert(error?.response?.data?.message);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Confirmed</th>
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName  + " "+ val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.location}</td>
              <td>{val.isConfirmed ? "Yes" : "No"}</td>
              <td>{val.isBaned ? "Blocked" : "Not blocked"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default User;
