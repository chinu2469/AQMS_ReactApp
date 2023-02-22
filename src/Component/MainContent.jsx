import React from "react";
import FloorWise from "./FloorWise";
import LiveReport from "./LiveReport";
import Simulator from "./Simulator";

//this is main container for every object and wraps all the data showed in display other than nav and footer
export default class MainContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container-fluid  border">
            <div className="row align-items-start">
              {/* header line which shoe=ws color id */}
              <h5 className="col-3">Overall Report </h5>
              <div
                className="col"
                style={{
                  width: "auto",
                  height: "20px",
                  backgroundColor: "#cdab46",
                }}
              ></div>
              <div className="col">LOW</div>
              <div
                className="col"
                style={{
                  width: "auto",
                  height: "20px",
                  backgroundColor: "#58e5d5",
                }}
              ></div>
              <div className="col">GOOD</div>
              <div
                className="col"
                style={{
                  width: "auto",
                  height: "20px",
                  backgroundColor: "#dc3545",
                }}
              ></div>
              <div className="col">High</div>
            </div>
            <div className="container-fluid mainContent">
              {/* the divs whic are  used to show the data live feed and the next is for floor wise */}
              <LiveReport />
              <FloorWise />
            </div>
          </div>
        </div>
        {/* this is simmulator wich have a button this will immediately add the value to database */}
        <Simulator />
      </React.Fragment>
    );
  }
}
