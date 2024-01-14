import { Box } from "@mui/system";

function PostDisplayBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        backgroundColor: "secondary.main",
        width: "40vh",
      }}
    >
      {" "}
      TEST{" "}
    </Box>
  );
}

export default PostDisplayBox;
