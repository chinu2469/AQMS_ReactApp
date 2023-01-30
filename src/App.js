import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.js";
import Home from "./Pages/Home.js";
import Navbar from "./Component/Navbar.jsx";

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //localStorage.setItem("userstate", isAuthenticated);
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}
export default App;
//<Route path="/" element={<Home />}></Route>
//<Route path="Dashboard" element={<Dashboard />} />
//private fun for routing through
// function PrivateRoute({ component: Component, ...rest }) {
//   // Get the JWT from local storage
//   const token = localStorage.getItem("token");
//   console.log("token is : " + token);

//   // If there is no JWT, or it is invalid, redirect to the login page
//   if (token == null) {
//     alert("Login Failed!! Plz enter correct credentials.");
//     return <Login />;
//   }

//   return <Component />;
// }
/*
const [isAuthenticated, setIsAuthenticated] = useState(false);
{isAuthenticated ? (
        <PrivateRoute component={MainContent} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
*/
