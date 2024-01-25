import { Button, TextField } from "@mui/material";
import { Box, color } from "@mui/system";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

interface inputCommentProps {
  fetchcomments: () => void;
}
function InputComment({ fetchcomments }: inputCommentProps) {
  const [original, change] = React.useState(false);
  const param = useParams();
  const [comment, changeComment] = React.useState({
    body: "",
  });

  const CreateComment = (e: React.FormEvent) => {
    e.preventDefault();
    const backendEndpoint = "http://localhost:8080/comments";
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const userID = localStorage.getItem("user");
    axios
      .post(
        backendEndpoint,
        {
          body: comment.body,
          userid: parseInt(userID!),
          postid: parseInt(param.id!),
        },
        config
      )
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        console.log("Backend response:", response.data);
        toast.success("Successfully commented!");
        fetchcomments();
        changeComment({ body: "null" });
      })
      .catch((error) => {
        // handle error
        console.error("Error creating comment", error);
        toast.error("Error creating comment");
      });
  };

  return (
    <Box
      component="form"
      onSubmit={CreateComment}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <TextField
        placeholder="Write a comment..."
        multiline
        onFocus={() => change(true)}
        onBlur={() => change(false)}
        fullWidth
        rows={2}
        onChange={(e) =>
          changeComment({
            body: e.target.value,
          })
        }
        sx={{
          borderRadius: "5px",
          transition: "0.2s background-color",
          ...(original
            ? { backgroundColor: "#313B41" }
            : { backgroundColor: "inherit" }),
        }}
      ></TextField>
      <Button
        type="submit"
        sx={{ height: "4vh", width: "6vw", marginTop: "10px" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default InputComment;
