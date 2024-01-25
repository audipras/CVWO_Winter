import { Box, BoxProps } from "@mui/system";
import { ReactNode, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import axios from "axios";
import IndividualPostBox from "./IndividualPostBox";
import { Post } from "../types.interface";

function PostDisplayBox() {
  const [posts, setPosts] = useState<null | Post[]>(null);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "top",
        height: "100%",
        minHeight: "87.75vh", //please change this idiot
        width: "40vw",
        backgroundColor: "#1B262C",
        padding: "10px",
        borderRadius: "16px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        gap: "10px",
      }}
    >
      {" "}
      <CreatePost fetchdata={fetchPosts} />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : posts ? (
          posts
            .sort((a, b) => b.id! - a.id!) //sort by id
            .map((post: Post) => <IndividualPostBox post={post} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </Box>
  );
}

export default PostDisplayBox;
