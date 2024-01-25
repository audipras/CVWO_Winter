import { Alert, Button, TextField, Typography } from "@mui/material";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import axios from "axios";
import React, { useState } from "react";
import { User } from "../types.interface";
import { Box } from "@mui/system";
import { Form, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Confetti from "react-confetti/dist/types/Confetti";

function Signup() {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password: "",
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const backendEndpoint = "http://localhost:8080/users";
    axios
      .post(backendEndpoint, signUpDetails)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        console.log("Backend response:", response.data);
        toast.success("Successfully signed up!");
        navigate("/Signin");
      })
      .catch((error) => {
        // handle error
        toast.error("Error signing up");
      });
  };

  return (
    <div style={{ height: "98vh" }}>
      <MainBox>
        <Box
          component="form"
          onSubmit={handleSignUp}
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
            Sign up now!
          </Typography>
          <TextField
            required
            onChange={(e) =>
              setSignUpDetails({
                username: e.target.value,
                password: signUpDetails.password,
              })
            }
            placeholder="Username"
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            required
            onChange={(e) =>
              setSignUpDetails({
                username: signUpDetails.username,
                password: e.target.value,
              })
            }
            type="password"
            placeholder="Password"
            sx={{ paddingBottom: "10px" }}
          />
          <Button
            type="submit"
            color="primary"
            sx={{ width: "5vw", height: "4vh" }}
          >
            Sign Up
          </Button>
        </Box>
      </MainBox>
    </div>
  );
}

export default Signup;
