import { Button, TextField, Typography } from "@mui/material";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import axios from "axios";
import { useState } from "react";
import { User } from "../types.interface";
import { Box } from "@mui/system";

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
        <Box
          sx={{
            transform: "translateY(-15vh)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Minun.png"
            alt="Minun"
            width="200"
            height="200"
            style={{ position: "relative", top: "35px", right: "-30px" }} //dont touch numbers
          />
          <Typography
            sx={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}
          >
            Welcome to Circles!
          </Typography>
          <TextField
            onChange={(e) =>
              setSignInDetails({
                username: e.target.value,
                password: signInDetails.password,
              })
            }
            placeholder="Username"
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            onChange={(e) =>
              setSignInDetails({
                username: signInDetails.username,
                password: e.target.value,
              })
            }
            placeholder="Password"
            sx={{ paddingBottom: "10px" }}
          />
          <Button
            onClick={() => handleSignIn(signInDetails)}
            color="primary"
            size="medium"
          >
            Sign In
          </Button>
        </Box>
      </MainBox>
    </div>
  );
}

export default Signin;
