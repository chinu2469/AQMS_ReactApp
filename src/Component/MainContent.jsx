import React from "react";
import Datacretor from "./Datacreator";
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
              <h5 className="col-4">Overall Report </h5>
              <div
                className="col"
                style={{
                  width: "10px",
                  height: "20px",
                  backgroundColor: "#cdab46",
                }}
              ></div>
              <div className="col">LOW</div>
              <div
                className="col"
                style={{
                  width: "10px",
                  height: "20px",
                  backgroundColor: "#58e5d5",
                }}
              ></div>
              <div className="col">GOOD</div>
              <div
                className="col"
                style={{
                  width: "10px",
                  height: "20px",
                  backgroundColor: "#dc3545",
                }}
              ></div>
              <div className="col">High</div>
            </div>
            <div className="container-fluid mainContent">
              <LiveReport />
              <FloorWise />
            </div>
          </div>
        </div>
        <Simulator />
      </React.Fragment>
    );
  }
}
