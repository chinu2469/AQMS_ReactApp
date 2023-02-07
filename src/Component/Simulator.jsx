import React from "react";
import axios from "axios";

export default function Simulator() {
  //create random obj
  const baseURL = "https://aqmsapi.azurewebsites.net/api/AQMSdata/";

  //post method call

  const postdata1 = () => {
    var fakedata = {
      date: new Date(),
      floor: Math.floor(Math.random() * (3 - 1 + 1) + 1),
      sensorID: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      O2: Math.floor(Math.random() * (92 - 78 + 1) + 78),
      co2: Math.floor(Math.random() * (90 - 70 + 1) + 70),
      SO2: Math.floor(Math.random() * (80 - 50 + 1) + 50),
      CO: Math.floor(Math.random() * (50 - 40 + 1) + 40),
      C: Math.floor(Math.random() * (50 - 40 + 1) + 40),
      Temp: Math.floor(Math.random() * (60 - 0 + 1) + 0),
      PM: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    };
    var passtr = JSON.stringify(fakedata);
    //post call
    axios
      .post(baseURL, fakedata)
      .then()
      .then((response) => {
        console.log("posted data" + response.data);
      })
      .then((response) => {
        console.log(response);
      });
    document.getElementById("statusp").innerHTML = "sent";
    document.getElementById("statusp").innerHTML =
      JSON.stringify(fakedata.id) + "is sent" + passtr;
  };
  return (
    <div>
      <span id="statusp"></span>
      <button id="postd" className="btn-primary" onClick={postdata1}>
        post 1 obj
      </button>
    </div>
  );
}
//"2023-01-03T19:13:48.402Z", //
