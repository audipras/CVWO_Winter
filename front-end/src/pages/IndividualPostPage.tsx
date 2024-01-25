import { Box } from "@mui/system";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { CommentType, Post } from "../types.interface";
import { useNavigate, useParams } from "react-router-dom";
import CommentBox from "../Components/CommentBox";
import InputComment from "../Components/InputComment";
import toast from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";
import EditDialogBox from "./EditDialogBox";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "../Components/DeleteDialog";

function IndividualPostPage() {
  const param = useParams();
  const [post, setPost] = useState<null | Post>(null);
  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const config = {
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  };
  const navigate = useNavigate();

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeletePost = () => {
    axios
      .delete(`http://localhost:8080/posts/${post!.id}`, config)
      .then((response) => {
        // handle success, the backend's response is available in 'response.data'
        toast.success("Post deleted successfully");
        handleCloseDialog();
        navigate("/Home");
      })
      .catch((error) => {
        toast.error("Error deleting post");
      });
  };

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/posts/${param.id}`
      );
      setPost(response.data);
    } catch (error) {
      toast.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Topbar />
      <div style={{ height: "8vh" }}></div>
      <MainBox>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "top",
            alignItems: "top",
            height: "100%",
            minHeight: "87.75vh",
            width: "60vw",
            backgroundColor: "#1B262C",
            padding: "10px",
            borderRadius: "16px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            gap: "10px",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "30vh",
              backgroundColor: "#0F4C75",
              paddingTop: "1vh",
              borderRadius: "5px",
              marginBottom: "10px",
              border: "1px solid #A9A9A9",
              paddingLeft: "4vw",
              position: "relative",
            }}
            elevation={10}
          >
            {" "}
            <div>
              <>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "24px",
                    marginBottom: "8px",
                    fontWeight: "bold",
                    overflow: "hidden",
                  }}
                >
                  {post!.title}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "pre-line",
                    wordBreak: "break-word",
                  }}
                >
                  {post!.body}
                </Typography>
              </>
            </div>
            <Tooltip title="Edit" arrow>
              <IconButton
                sx={{ position: "absolute", bottom: "10px", right: "10px" }}
              >
                <EditIcon onClick={handleOpenDialog}></EditIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow>
              <IconButton
                sx={{ position: "absolute", bottom: "10px", right: "50px" }}
              >
                <DeleteIcon onClick={openDeleteDialog}></DeleteIcon>
              </IconButton>
            </Tooltip>
            <DeleteDialog
              open={deleteDialogOpen}
              onClose={closeDeleteDialog}
              handleDeletePost={handleDeletePost}
            />
            <EditDialogBox
              open={dialogOpen}
              onClose={handleCloseDialog}
              initialPost={post!}
              onEditPost={fetchPost}
            />
          </Paper>
          <InputComment fetchcomments={fetchPost} />
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              post?.comments
                ?.sort((a, b) => b.id! - a.id!)
                .map((comment: CommentType) => <CommentBox comment={comment} />)
            )}
          </div>
        </Box>
      </MainBox>{" "}
    </>
  );
}
export default IndividualPostPage;
