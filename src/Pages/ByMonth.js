import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const baseURL = "https://localhost:7216/AQMSdata/ByMonth";

function ByMonth() {
  const [bymonth, setbymonth] = useState([]);
  useEffect(() => {
    const getdata = setInterval(() => {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .get(baseURL, { headers })
        .then((response) => {
          console.log(response.status + " live data status");
          setbymonth(response.data);
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
          {bymonth.map((item, index) => (
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

export default ByMonth;
//<Line data={chartData} />
/**
const chartData = {
    labels: bymonth.map((datum) => new Date(datum.date).toLocaleDateString()),
    datasets: [
      {
        label: "o2",
        data: bymonth.map((datum) => datum.o2),
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderColor: "rgba(0, 0, 255, 1)",
      },
      {
        label: "co2",
        data: bymonth.map((datum) => datum.co2),
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(255, 0, 0, 1)",
      },
    ],
  };
 */
