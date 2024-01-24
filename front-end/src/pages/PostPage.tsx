import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { fontSize } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { Post } from "../types.interface";

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
  onCreatePost: (postContent: Post) => void;
}

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({
  open,
  onClose,
  onCreatePost,
}) => {
  const [postContent, setPostContent] = useState({
    title: "",
    body: "",
  });

  const handleCreatePost = () => {
    // Handle creating the post (e.g., send data to the server)
    onCreatePost(postContent);

    // Close the dialog
    onClose();
  };

  return (
    <Dialog open={open} onClose={() => {}} fullWidth={true} maxWidth={"lg"}>
      <DialogTitle>
        <Typography fontSize={30}> Create Post</Typography>
        <TextField
          inputProps={{ sx: { fontSize: "30px" } }}
          autoFocus
          margin="dense"
          id="postContent"
          label="Post Title"
          type="text"
          fullWidth={true}
          rows={1}
          value={postContent.title}
          onChange={(e) =>
            setPostContent({
              title: e.target.value,
              body: postContent.body,
            })
          }
        />
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="body"
          label="Post Body"
          type="text"
          fullWidth={true}
          multiline
          rows={20}
          value={postContent.body}
          onChange={(e) =>
            setPostContent({
              title: postContent.title,
              body: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreatePost} color="primary">
          Create Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
