import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
//base url to access flor data just add flor no to end
var baseURL = "https://localhost:7216/AQMSdata/LastofFloor?floor=";

//this class cretes tabs for floors and present respective data
export default class FloorWise extends React.Component {
  render() {
    var flno1 = 1;
    var flno2 = 2;
    var flno3 = 3;
    return (
      <div>
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor1"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Floor 1
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor2"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Floor2
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor3"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Floor3
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="flor1"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <FloorGetVal data={flno1} />
          </div>
          <div
            className="tab-pane fade"
            id="flor2"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <FloorGetVal data={flno2} />
          </div>
          <div
            className="tab-pane fade"
            id="flor3"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <FloorGetVal data={flno3} />
          </div>
        </div>
      </div>
    );
  }
}

//this function is for accessing the data table
//this function requires an prop which gives floor no as val
function FloorGetVal(props) {
  const [lastdata, setLastdata] = useState({});
  var florNo = props.data;
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(baseURL + florNo)
        .then((response) => {
          console.log(response.status + "Floorewise api status");
          setLastdata(response.data);
        })
        .catch((err) => {
          console.log("error" + err);
        });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  //if (!livedata) return null;
  return (
    <div>
      <h6>last record for floor {florNo}</h6>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
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
            <td>{lastdata.id}</td>
            <td>{lastdata.sensorID}</td>
            <td>{lastdata.o2}</td>
            <td>{lastdata.co2}</td>
            <td>{lastdata.sO2}</td>
            <td>{lastdata.temp}</td>
            <td>{lastdata.pm}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/*
<FloorGetVal />
for(var x; x<3;x++)
{

}
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
*/
