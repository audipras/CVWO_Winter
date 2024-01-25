import {
  Dialog,
  DialogTitle,
  Typography,
  TextField,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  handleDeletePost: () => void;
}

function DeleteDialog({ open, onClose, handleDeletePost }: DeleteDialogProps) {
  return (
    <Dialog open={open} onClose={() => {}} maxWidth={"lg"}>
      <DialogTitle>
        <Typography fontSize={30}> Delete Post</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>Warning: This action cannot be reversed!</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeletePost} color="primary">
          Delete Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
