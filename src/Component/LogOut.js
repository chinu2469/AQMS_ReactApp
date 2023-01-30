import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import Login from "../Login.js";

export default function LogOut() {
  //let history = useHistory();
  localStorage.clear();
  console.log("m i clicked");
  //history.push("/new-route");
  return <div></div>;
}

function TimerLogOut(props) {
  useEffect(() => {
    const LoginTimer = setTimeout(() => {
      localStorage.clear();
      props.setIsAuthenticated(false);
      console.log("local clear");
    }, [3000]);

    return () => clearTimeout(LoginTimer);
  }, []);

  return <Login />;
}
