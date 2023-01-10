import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const baseURL = "https://localhost:7216/api/AQMSdata/";

export default function Datacretor() {
  const [post, setPost] = useState();
  //const [fakedata, setfakedata] = useState(d);

  useEffect(() => {
    axios
      .get(baseURL + "3")
      .then()
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }, []);

  //postdata
  const postdata1 = (x) => {
    x.preventDefault();
    //create random obj
    var fakedata = {
      ID: 0,
      date: "2023-01-03T19:13:48.402Z", //new Date(),
      floor: 1 + Math.floor(Math.random() * 5),
      sensorID: 1 + Math.floor(Math.random() * 3),
      O2: Math.floor(Math.random() * 90),
      co2: Math.floor(Math.random() * 50),
      SO2: Math.floor(Math.random() * 90),
      CO: Math.floor(Math.random() * 50),
      C: Math.floor(Math.random() * 70),
      Temp: Math.floor(Math.random() * 280),
      PM: 1 + Math.floor(Math.random() * 11),
    };
    var passtr = JSON.stringify(fakedata);
    //post method call
    axios
      .post(baseURL, { passtr })
      .then()
      .then((response) => {
        console.log("posted data" + response.data);
      })
      .then((response) => {
        console.log(response);
      });
    document.getElementById("statusp").innerHTML = "sent";
    document.getElementById("statusp").innerHTML =
      JSON.stringify(fakedata.id) + "is sent";
  };
  if (!post) return null;

  return (
    <div>
      <p>{post.id}</p>
      <p>{post.date}</p>
      <span id="statusp"></span>
      <button id="postd" className="btn-primary" onClick={postdata1}>
        post 1 obj
      </button>
    </div>
  );
}

/*
JSON.stringify(fakedata)
var  myobj = JSON.stringify(x); //convert to json
    console.log(myobj);
    function postdata1() {
    
        // Send data to the backend 
        fetch('https://localhost:7216/api/AQMSdata', {  // my api
    
          method: 'POST', 
          mode: 'no-cors', 
          headers: { 'Content-Type': 'multipart/form-data' },
          body:  myobj// tranfer to string JSON.stringify(x)
        })
        .then((response) => response.JSON())
        .catch(error => console.log("Error detected: " + error + myobj))
        
    }
    postdata1();
    document.getElementById("SensorVal").innerHTML = myobj;
    console.log(x);

var d = {
    "ID" : 0,
    "date" : "2023-01-03T19:13:48.402Z",//new Date(),
    "floor" : Math.floor(Math.random()*3),
    "O2" : Math.floor(Math.random()*90),
    "co2" : Math.floor(Math.random()*50),
    "SO2" : Math.floor(Math.random()*90),
    "CO" : Math.floor(Math.random()*50),
    "C" : Math.floor(Math.random()*70),
    "Temp" : Math.floor(Math.random()*280),
    "PM" : Math.floor(Math.random()*10)
}


var x = {
    "id": 0,
    "date": "2023-01-03T19:13:48.402Z",
    "floor": 0,
    "o2": 0,
    "co2": 0,
    "sO2": 0,
    "co": 0,
    "c": 0,
    "temp": 0,
    "pm": 0
}
console.log("Success data"+ response)
let formattedDate = new Date(2022, 03, 17);
floor1
class AQMSdata 
    {
        constructor(id, date,floor,o2,co2,so2,co,c,temp,pm) {
          this.ID = id;
          this.Date = date;
          this.Flooor = floor;
          this.O2 = o2;
          this.CO2 = co2;
          this.SO2 = so2;
          this.CO = co;
          this.C = c;
          this.Temp = temp;
          this.PM = pm;
        }
    }


    var id = 0;               //its indentity
    var date = new Date();    //seting date 
    var floor = Math.floor(Math.random()*3);
    var o2 = Math.floor(Math.random()*90);
    var co2 = Math.floor(Math.random()*50);
    var so2 = Math.floor(Math.random()*90);
    var co = Math.floor(Math.random()*50);
    var c = Math.floor(Math.random()*70);
    var temp = Math.floor(Math.random()*280);
    var pm = Math.floor(Math.random()*10);
    //var data1 = new AQMSdata(id, date,floor,o2,co2,so2,co,c,temp,pm);

const lowest = 1;
const highest = 6;
 
let randomNumber = Math.random() * (highest - lowest) + lowest;
 
randomNumber = Math.floor(randomNumber);
 
console.log(randomNumber);




alert("I am an alert box!");

const person = new Person('testFirstName', 'testLastName');

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName
*/
