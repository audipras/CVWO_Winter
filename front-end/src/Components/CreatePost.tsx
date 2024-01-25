import { Button, TextField } from "@mui/material";
import CreatePostDialog from "../pages/PostPage";
import { useState } from "react";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { Post } from "../types.interface";

function CreatePost() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCreatePost = (postContent: Post) => {
    //check if post is empty
    const isInvalidPost = (postContent: Post) => {
      return postContent.title.trim() === "" || postContent.body.trim() === "";
    };

    if (isInvalidPost(postContent)) {
      console.error("Invalid post content. Title and body are required.");
      return;
    }

    console.log("Creating post with data:");
    const backendEndpoint = "http://localhost:8080/posts"; //temporary address

    axios
      .post(backendEndpoint, postContent)
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
      <TextField
        InputProps={{
          readOnly: true,
        }}
        sx={{ color: "primary.main" }}
        id="outlined-basic"
        placeholder="Create Post..."
        variant="outlined"
        style={{ width: "80vh" }}
        onClick={handleOpenDialog}
        focused={false}
      ></TextField>

      <CreatePostDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onCreatePost={handleCreatePost}
      />
    </div>
  );
}

export default CreatePost;
