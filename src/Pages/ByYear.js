import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURLinUse } from "../Component/Datacreator"; //baseURLinUse

const baseURL = baseURLinUse + "/AQMSdata/ByYear?year=2023";

function ByYear() {
  const [byyear, setbyyear] = useState([]);
  useEffect(() => {
    const getdata = setInterval(() => {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .get(baseURL, { headers })
        .then((response) => {
          console.log(response.status + " live data status");
          setbyyear(response.data);
        })
        .catch((err) => {
          console.log("error" + err);
        });
    }, 3000);
    return () => clearInterval(getdata);
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>date</th>
            <th>floor</th>
            <th>sensorID</th>
            <th>o2</th>
            <th>co2</th>
            <th>sO2</th>
            <th>co</th>
            <th>c</th>
            <th>temp</th>
            <th>pm</th>
          </tr>
        </thead>
        <tbody>
          {byyear.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.floor}</td>
              <td>{item.sensorID}</td>
              <td>{item.o2}</td>
              <td>{item.co2}</td>
              <td>{item.sO2}</td>
              <td>{item.co}</td>
              <td>{item.c}</td>
              <td>{item.temp}</td>
              <td>{item.pm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ByYear;
