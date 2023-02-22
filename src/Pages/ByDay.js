import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { baseURLinUse } from "../Component/Datacreator"; //baseURLinUse

const baseURL = baseURLinUse + "/AQMSdata/ByDay";

//this function will add graph in the day page and show the data in ghraphical format
function ByDay() {
  //const [byday, setbyday] = useState([]);
  //var [chartData, setChartData] = useState({});
  var byday = {};
  var timeHour = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  var o2 = [];
  var co2 = [];
  var sO2 = [];
  var temp = [];
  var ChartData = {
    labels: [
      "00am",
      "1am ",
      "2am ",
      "3am ",
      "4am ",
      "5tam ",
      "6am ",
      "7am ",
      "8am ",
      "9am ",
      "10am ",
      "11am ",
      "12pm ",
      "1pm ",
      "2pm ",
      "3pm ",
      "4pm ",
      "5pm ",
      "6pm ",
      "7pm ",
      "8pm ",
      "9pm ",
      "10pm ",
      "11pm ",
    ],
    datasets: [
      {
        label: "O2",
        data: o2,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "CO2",
        data: co2,
        borderColor: "#8e5ea2",
        fill: false,
      },
      {
        label: "sO2",
        data: sO2,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Temp",
        data: temp,
        borderColor: "orange",
        fill: false,
      },
    ],
  };

  //api call for by day api
  useEffect(() => {
    try {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .get(baseURL, { headers })
        .then((response) => {
          console.log(response.status + " byday data status");
          //setbyday(response.data);
          byday = response.data;
          dayDataProcess();
        })
        .catch((err) => {
          console.log("error" + err);
        });
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  function dayDataProcess() {
    timeHour.map((hour) => {
      let tempvalo2 = [];
      let tempvalco2 = [];
      let tempvalsO2 = [];
      let tempvaltemp = [];
      byday.map((data) => {
        //check for the string of time to match with hour
        if (data.date.substring(11, 13) == hour) {
          //adding the dat to the temp array
          //console.log(data.o2);
          isFinite(data.o2)
            ? tempvalo2.push(parseInt(data.o2))
            : tempvalo2.push(0);

          isFinite(data.co2)
            ? tempvalco2.push(parseInt(data.co2))
            : tempvalco2.push(0);
          isFinite(data.sO2)
            ? tempvalsO2.push(parseInt(data.sO2))
            : tempvalsO2.push(0);
          isFinite(data.temp)
            ? tempvaltemp.push(parseInt(data.temp))
            : tempvaltemp.push(0);
        } else {
          //if not present date then set to zerp
          tempvalo2.push(0);
          tempvalco2.push(0);
          tempvalsO2.push(0);
          tempvaltemp.push(0);
        }
      });
      //push the values to the array reducer callback fun
      o2.push(
        Math.floor(tempvalo2.reduce((a, b) => a + b, 0) / tempvalo2.length)
      );

      co2.push(
        Math.floor(tempvalco2.reduce((a, b) => a + b, 0) / tempvalco2.length)
      );
      sO2.push(
        Math.floor(tempvalsO2.reduce((a, b) => a + b, 0) / tempvalsO2.length)
      );
      temp.push(
        Math.floor(tempvaltemp.reduce((a, b) => a + b, 0) / tempvaltemp.length)
      );
    });
    //ChartData.datasets.o2 = o2;
    //console.log(ChartData);
  }

  //useEffect(() => {}, []);
  //declaring the chart dat to be used
  /* var chartData = {
    labels: [
      "00am",
      "1am ",
      "2am ",
      "3am ",
      "4am ",
      "5tam ",
      "6am ",
      "7am ",
      "8am ",
      "9am ",
      "10am ",
      "11am ",
      "12pm ",
      "1pm ",
      "2pm ",
      "3pm ",
      "4pm ",
      "5pm ",
      "6pm ",
      "7pm ",
      "8pm ",
      "9pm ",
      "10pm ",
      "11pm ",
    ],
    datasets: [
      {
        label: "O2",
        data: o2,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "CO2",
        data: co2,
        borderColor: "#8e5ea2",
        fill: false,
      },
      {
        label: "sO2",
        data: sO2,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Temp",
        data: temp,
        borderColor: "orange",
        fill: false,
      },
    ],
  };*/

  return (
    <div>
      <div className="container-flex">
        <Line data={ChartData} />
      </div>
    </div>
  );
}

export default ByDay;
