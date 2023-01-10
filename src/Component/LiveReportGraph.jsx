import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import LiveReport from "./LiveReport";

//this function provides an circle progress whenever called
//it needs an object as props which contains the lable of the progresscircle
//and the value for circle for e.g. const O2obj = { name: "Oxy", val: 45 };
export default function LiveReportGraph(props) {
  var dt = props.data.val;
  return (
    <div className="container-sm livedisplay">
      <h6 className="text-center">{props.data.name} level</h6>
      <CircularProgressbar
        value={dt}
        text={`${dt}%`}
        circleRatio={0.8}
        styles={buildStyles({
          rotation: 0.6,
          strokeLinecap: "butt",
          trailColor: "#eee",
        })}
      />
    </div>
  );
}
/**
 ctx = 12;
 
    
  --------------------------------------------
  
 */
