import { Button, TextField } from "@mui/material";
import CreatePostDialog from "../pages/CreatePostDialog";
import { useState } from "react";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { Post } from "../types.interface";
import toast from "react-hot-toast";

interface CreatePostProps {
  fetchdata: () => void;
}
function CreatePost({ fetchdata }: CreatePostProps) {
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
      toast.error("Invalid post content. Title and body are required.");
      return;
    }

    const backendEndpoint = "http://localhost:8080/posts"; //temporary address

    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .post(backendEndpoint, postContent, config)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        fetchdata();
        toast.success("Successfully created post");
        handleCloseDialog();
      })
      .catch((error) => {
        // handle error
        toast.error("Error creating post");
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
        fullWidth
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
