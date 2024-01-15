import { Box } from "@mui/system";

function PostDisplayBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "secondary.main",
        width: "80vh",
        borderRadius: "16px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      }}
    ></Box>
  );
}

export default PostDisplayBox;
