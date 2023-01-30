import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LiveReportGraph from "./LiveReportGraph";
//url for accesing the  api
const baseURL = "https://localhost:7216/AQMSdata/LastRowdata";

//this function returns the las row from table to get the current data
//repeats every 3 sec to show live
function LiveReport() {
  const [livedata, setLivedata] = useState({});
  useEffect(() => {
    const getdata = setInterval(() => {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .get(baseURL, { headers })
        .then((response) => {
          console.log(response.status + " live data status");
          setLivedata(response.data);
        })
        .catch((err) => {
          console.log("error" + err);
        });
    }, 3000);
    return () => clearInterval(getdata);
  }, []);
  //setting object which is prerequisite for live graph
  const O2obj = { name: "Oxy", val: 45, max: 90, min: 80 };
  const CO2obj = { name: "CO2", val: 0, max: 70, min: 40 };
  const SO2obj = { name: "SO2", val: 0, max: 90, min: 80 };
  const Tempobj = { name: "Temp", val: 0, max: 45, min: 20 };
  //adding values to objects
  O2obj.val = livedata.o2;
  CO2obj.val = livedata.co2;
  SO2obj.val = livedata.sO2;
  Tempobj.val = livedata.temp;

  return (
    <React.Fragment>
      <div className="container-fluid contentCentre">
        <LiveReportGraph data={O2obj} />
        <LiveReportGraph data={CO2obj} />
        <LiveReportGraph data={SO2obj} />
        <LiveReportGraph data={Tempobj} />
      </div>

      <div>
        <h5 className="text-center mobileTxt">Last Update</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">F.no</th>
              <th scope="col">S.no</th>
              <th scope="col">o2</th>
              <th scope="col">Co2</th>
              <th scope="col">So2</th>
              <th scope="col">T0</th>
              <th scope="col">pm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{livedata.floor}</td>
              <td>{livedata.sensorID}</td>
              <td>{livedata.o2}</td>
              <td>{livedata.co2}</td>
              <td>{livedata.sO2}</td>
              <td>{livedata.temp}</td>
              <td>{livedata.pm}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
export default LiveReport;

/*
async function callApi() {
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    try {
        const response = await axios.get('https://your-api.com/endpoint', {headers});
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
*/
