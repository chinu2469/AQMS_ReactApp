import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { baseURLinUse } from "../Component/Datacreator"; //baseURLinUse

const baseURL = baseURLinUse + "/AQMSdata/ByMonth"; //query syntax = ?month=January
// this function will return the graph by month currently for last month
function ByMonth() {
  var bymonth = {};
  //const [chartData, setChartData] = useState({});
  var dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  var o2 = [];
  var co2 = [];
  var sO2 = [];
  var temp = [];
  var chartData = {
    labels: [
      "1st ",
      "2nd ",
      "3rd ",
      "4th ",
      "5th ",
      "6th ",
      "7th ",
      "8th ",
      "9th ",
      "10th ",
      "11th ",
      "12th ",
      "13th ",
      "14th ",
      "15th ",
      "16th ",
      "17th ",
      "18th ",
      "19th ",
      "20th ",
      "21st ",
      "22nd ",
      "23rd ",
      "24th ",
      "25th ",
      "26th ",
      "27th ",
      "28th ",
      "29th ",
      "30th ",
      "31st ",
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

  useEffect(() => {
    try {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .get(baseURL, { headers })
        .then((response) => {
          console.log(response.status + " live data status");
          bymonth = response.data;
          MonthDataProcess();
        })
        .catch((err) => {
          console.log("error" + err);
        });
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  function MonthDataProcess() {
    dates.map((dt) => {
      var tempvalo2 = [];
      let tempvalco2 = [];
      let tempvalsO2 = [];
      let tempvaltemp = [];
      bymonth.map((data) => {
        if (data.date.substring(8, 10) == dt) {
          //adding the dat to the temp array
          isFinite(data.o2)
            ? tempvalo2.push(parseInt(data.o2))
            : tempvalo2.push(0);
          isFinite(data.o2)
            ? tempvalco2.push(parseInt(data.co2))
            : tempvalco2.push(0);
          isFinite(data.o2)
            ? tempvalsO2.push(parseInt(data.sO2))
            : tempvalsO2.push(0);
          isFinite(data.o2)
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
      //push the values to the array
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
      // console.log("o" + tempvalo2);
      // console.log("co" + tempvalco2);
      // console.log("so" + tempvalsO2);
      // console.log("tem" + tempvaltemp);
    });
  }

  console.log(chartData);
  return (
    <div>
      <div className="container-flex">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default ByMonth;
