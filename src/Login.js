//-----------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import axios from "axios";
const baseURL = "https://aqmsapi.azurewebsites.net/JwtToken";

function LoginPage(props) {
  const [User, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [jwttoken, setjwttoken] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    //call api logion
    await axios
      .post(baseURL + "/Login", { Username: User, Password: password })
      .then((response) => {
        console.log(response.status + "Received JWT token ");
        setjwttoken(response.data);
      })
      .catch((err) => {
        console.log("error" + err);
        alert("check Credential");
      });
    // If the login is successful, a JWT will be returned
    if (jwttoken) {
      localStorage.setItem("token", jwttoken); // Store the JWT in local storage
      console.log("inside loop ");
      //Set user logged in
      props.setIsAuthenticated(true);
    }
  }

  return (
    <div className="d-flex  flex-column col-4 mainContent ">
      <label className="">
        <h6>Username</h6>
        <input
          type="User"
          value={User}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter Username"
        />
      </label>
      <label>
        <h6>Password</h6>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </label>

      <button className="btn btn-secondary " onClick={formSubmit}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
//.then((response) => console.log(response + "1"))
