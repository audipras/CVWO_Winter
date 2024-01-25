import { Card, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Post } from "../types.interface";
import { Box } from "@mui/system";

interface postProps {
  post: Post;
}

const IndividualPostBox: React.FC<postProps> = ({ post }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "15vh",
        backgroundColor: "grey",
        paddingTop: "1vh",
        borderRadius: "5px",
        marginBottom: "10px",
        border: "1px solid #A9A9A9",
        paddingLeft: "2vh",
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.01)",
          border: "2px solid #A9A9A9",
        },
      }}
      elevation={10}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.5rem",
          marginBottom: "8px",
          fontWeight: "bold",
          overflow: "hidden",
        }}
      >
        {post.title}
      </Typography>

      <Typography
        sx={{
          color: "white",
          fontSize: "1rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          whiteSpace: "pre-line",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 4,
          wordBreak: "break-word",
        }}
      >
        {post.body}
      </Typography>
    </Paper>
  );
};

export default IndividualPostBox;
