import { Button, Card, Icon, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Post } from "../types.interface";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { config } from "process";
import toast from "react-hot-toast";

interface postProps {
  post: Post;
}

const IndividualPostBox: React.FC<postProps> = ({ post }) => {
  var numberOfComments = 0;
  if (post.comments == undefined) {
  } else {
    post.comments!.forEach((a) => (numberOfComments += 1));
  }

  return (
    <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
      <Paper
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minHeight: "15vh",
          backgroundColor: "#0F4C75",
          paddingTop: "1vh",
          borderRadius: "5px",
          paddingBottom: "30px",
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
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            bottom: "5px",
          }}
        >
          <CommentIcon sx={{ paddingRight: "2px" }}></CommentIcon>
          <Typography> {String(numberOfComments)} Comments</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "15px",
            left: "15px",
          }}
        >
          <FavoriteIcon sx={{ height: "40px", width: "40px" }}></FavoriteIcon>
        </Box>
      </Paper>
    </Link>
  );
};

export default IndividualPostBox;
