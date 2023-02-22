//import Navbar from "../Component/Navbar.jsx";
import Login from "./Login.js";
import React from "react";
import MainContent from "../Component/MainContent";

import { useState } from "react";

function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <PrivateRoute component={MainContent} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}
export default Dashboard;

function PrivateRoute({ component: Component, ...rest }) {
  // Get the JWT from local storage
  const token = localStorage.getItem("token");
  //console.log("token is : " + token);

  // If there is no JWT, or it is invalid, redirect to the login page
  if (token == null) {
    alert("Login Failed!! Plz enter correct credentials.");
    return <Login />;
  }

  return <Component />;
}
