import React from "react";
import Datacretor from "./Datacreator";
import FloorWise from "./FloorWise";

import LiveReport from "./LiveReport";

//this is main container for every object and wraps all the data showed in display other than nav and footer
export default class MainContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container-fluid  border">
            <span>Overall Report</span>
            <div className="container-fluid mainContent">
              <LiveReport />
              <FloorWise />
            </div>
          </div>
          <div>
            <button className="btn-primary">add data</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
