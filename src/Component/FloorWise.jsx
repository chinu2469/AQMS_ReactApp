import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURLinUse } from "./Datacreator"; //baseURLinUse
//base url to access flor data just add flor no to end
var baseURL = baseURLinUse + "/AQMSdata/LastofFloor?floor=";

//this class cretes tabs for floors and present respective data
// line no 94 have the nested function FloorGetVal
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
              id="flor1-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor1"
              type="button"
              role="tab"
              aria-controls="flor1"
              aria-selected="true"
            >
              Floor 1
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="flor2-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor2"
              type="button"
              role="tab"
              aria-controls="flor2"
              aria-selected="false"
            >
              Floor2
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="flor3-tab"
              data-bs-toggle="tab"
              data-bs-target="#flor3"
              type="button"
              role="tab"
              aria-controls="flor3"
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
            aria-labelledby="flor1-tab"
          >
            <FloorGetVal data={flno1} />
          </div>
          <div
            className="tab-pane fade"
            id="flor2"
            role="tabpanel"
            aria-labelledby="flor2-tab"
          >
            <FloorGetVal data={flno2} />
          </div>
          <div
            className="tab-pane fade"
            id="flor3"
            role="tabpanel"
            aria-labelledby="flor3-tab"
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

  //if (!livedata) return null;<h6>last record for floor {florNo}</h6>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
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
            <td>{lastdata.sensorID}</td>
            <td
              style={{
                color:
                  lastdata.o2 > 90
                    ? "#dc3545"
                    : lastdata.o2 > 80
                    ? "#58e5d5"
                    : "#cdab46",
              }}
            >
              {lastdata.o2}
            </td>
            <td
              style={{
                color:
                  lastdata.co2 > 70
                    ? "#dc3545"
                    : lastdata.co2 > 40
                    ? "#58e5d5"
                    : "#cdab46",
              }}
            >
              {lastdata.co2}
            </td>
            <td
              style={{
                color:
                  lastdata.so2 > 90
                    ? "#dc3545"
                    : lastdata.so2 > 80
                    ? "#58e5d5"
                    : "#cdab46",
              }}
            >
              {lastdata.sO2}
            </td>
            <td
              style={{
                color:
                  lastdata.temp > 45
                    ? "#dc3545"
                    : lastdata.temp > 20
                    ? "#58e5d5"
                    : "#cdab46",
              }}
            >
              {lastdata.temp}
            </td>
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
