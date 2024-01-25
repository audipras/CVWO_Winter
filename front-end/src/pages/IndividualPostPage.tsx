import { Box } from "@mui/system";
import MainBox from "../Components/MainBox";
import Topbar from "../Components/Topbar";
import { Paper, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { CommentType, Post } from "../types.interface";
import { useParams } from "react-router-dom";
import CommentBox from "../Components/CommentBox";

function IndividualPostPage() {
  const param = useParams();
  const [post, setPost] = useState<null | Post>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/posts/${param.id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);
  return (
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
            backgroundColor: "#666699",
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
              backgroundColor: "grey",
              paddingTop: "1vh",
              borderRadius: "5px",
              marginBottom: "10px",
              border: "1px solid #A9A9A9",
              paddingLeft: "4vw",
            }}
            elevation={10}
          >
            {" "}
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
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
              )}
            </div>
          </Paper>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              post?.comments?.map((comment: CommentType) => (
                <CommentBox comment={comment} />
              ))
            )}
          </div>
        </Box>
      </MainBox>{" "}
    </>
  );
}
export default IndividualPostPage;
