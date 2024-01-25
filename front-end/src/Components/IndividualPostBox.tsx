import { Card, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Post } from "../types.interface";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

interface postProps {
  post: Post;
}

const IndividualPostBox: React.FC<postProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
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
          overflow: "hidden",
          transition: "transform 0.2s",
          paddingLeft: "4vw",
          "&:hover": {
            transform: "scale(1.01)",
            border: "2px solid #ffffff",
          },
        }}
        elevation={10}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "24px",
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
            fontSize: "16px",
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
    </Link>
  );
};

export default IndividualPostBox;
