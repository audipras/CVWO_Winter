import { Card, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CommentType, Post } from "../types.interface";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

interface commentProps {
  comment: CommentType;
}

const CommentBox: React.FC<commentProps> = ({ comment }) => {
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
        overflow: "hidden",
        transition: "transform 0.2s",
        paddingLeft: "4vw",
      }}
      elevation={10}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "16px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          wordBreak: "break-word",
        }}
      >
        {comment.body}
      </Typography>
    </Paper>
  );
};

export default CommentBox;
