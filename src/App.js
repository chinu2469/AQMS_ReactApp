import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.js";
import Home from "./Pages/Home.js";
import ByMonth from "./Pages/ByMonth";
import ByDay from "./Pages/ByDay";
import ByYear from "./Pages/ByYear";
import Register from "./Pages/Register";
import ErrorStates from "./Pages/ErrorStates";

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //localStorage.setItem("userstate", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bymonth" element={<ByMonth />} />
          <Route path="/byday" element={<ByDay />} />
          <Route path="/byyear" element={<ByYear />} />
          <Route path="/ErrorStates" element={<ErrorStates />} />
        </Route>
      </Routes>
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
