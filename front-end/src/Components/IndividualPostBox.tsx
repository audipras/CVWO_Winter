import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Post } from "../types.interface";
import { Box } from "@mui/system";

interface postProps {
  post: Post;
}

const IndividualPostBox: React.FC<postProps> = ({ post }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "15vh",
        backgroundColor: "grey",
        paddingTop: "2vh",
        borderRadius: "5px",
        marginBottom: "10px",
        border: "1px solid #A9A9A9",
        paddingLeft: "2vh",
        overflow: "hidden",
      }}
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
          whiteSpace: "pre-line",
        }}
      >
        {post.body}
      </Typography>
    </Box>
  );
};

export default IndividualPostBox;
