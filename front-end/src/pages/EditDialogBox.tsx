import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { Post } from "../types.interface";

interface EditPostDialogProps {
  open: boolean;
  onClose: () => void;
  initialPost?: Post;
  onEditPost: () => void;
}

const EditDialogBox: React.FC<EditPostDialogProps> = ({
  open,
  onClose,
  onEditPost,
  initialPost = { title: "", body: "" },
}) => {
  const [editedPost, setEditedPost] = useState<Post>(initialPost);

  useEffect(() => {
    setEditedPost(initialPost);
  }, [initialPost]);

  const backendEndpoint = `http://localhost:8080/posts/${initialPost.id}`;

  const config = {
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  };

  const handleEditPost = () => {
    axios
      .patch(backendEndpoint, editedPost, config)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        toast.success("Post edited successfully");
        onEditPost();
        onClose(); // Close the dialog after successful edit
      })
      .catch((error) => {
        toast.error("Error editing post");
      });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={"lg"}>
      <DialogTitle>
        <Typography fontSize={30}> Edit Post</Typography>
        <TextField
          required
          inputProps={{ sx: { fontSize: "30px" } }}
          autoFocus
          margin="dense"
          id="postContent"
          label="Post Title"
          type="text"
          fullWidth={true}
          rows={1}
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              title: e.target.value,
            })
          }
        />
      </DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="body"
          label="Post Body"
          type="text"
          fullWidth={true}
          multiline
          rows={20}
          value={editedPost.body}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              body: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEditPost} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialogBox;
