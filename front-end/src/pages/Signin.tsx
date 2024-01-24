import { Button, TextField } from "@mui/material";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import axios from "axios";
import { useState } from "react";
import { User } from "../types.interface";

function Signin() {
  const [signInDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = (details: User) => {
    const backendEndpoint = "http://localhost:8080/users/signin";
    axios
      .post(backendEndpoint, signInDetails)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        console.log("Backend response:", response.data);
      })
      .catch((error) => {
        // handle error
        console.error("Error creating user:", error);
      });
  };

  return (
    <div>
      <Topbar />
      <MainBox>
        <TextField
          onChange={(e) =>
            setSignInDetails({
              username: e.target.value,
              password: signInDetails.password,
            })
          }
        />
        <TextField
          onChange={(e) =>
            setSignInDetails({
              username: signInDetails.username,
              password: e.target.value,
            })
          }
        />
        <Button onClick={() => handleSignIn(signInDetails)} color="primary">
          Sign In
        </Button>
      </MainBox>
    </div>
  );
}

export default Signin;
