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
        justifyContent: "center",
        alignItems: "center",
        height: "15vh",
        backgroundColor: "grey",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <Typography sx={{ color: "white" }}>{post.title}</Typography>
      <Typography sx={{ color: "white" }}>{post.body}</Typography>
    </Box>
  );
};

export default IndividualPostBox;
