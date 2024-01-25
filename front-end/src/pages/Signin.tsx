import { Alert, Button, TextField, Typography } from "@mui/material";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import axios from "axios";
import React, { useState } from "react";
import { User } from "../types.interface";
import { Box } from "@mui/system";
import { Form, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signin() {
  const navigate = useNavigate();
  const [signInDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const backendEndpoint = "http://localhost:8080/users/signin";
    axios
      .post(backendEndpoint, signInDetails)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        console.log("Backend response:", response.data);
        toast.success("Successfully logged in!");
        navigate("/home");
      })
      .catch((error) => {
        // handle error
        console.error("Error signing in", error);
        toast.error("Error signing in");
      });
  };

  return (
    <div style={{ height: "98vh" }}>
      <MainBox>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            transform: "translateY(-10vh)",
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
            type="password"
            placeholder="Password"
            sx={{ paddingBottom: "10px" }}
          />
          <Button type="submit" color="primary" size="medium">
            Sign In
          </Button>
        </Box>
      </MainBox>
    </div>
  );
}

export default Signin;
