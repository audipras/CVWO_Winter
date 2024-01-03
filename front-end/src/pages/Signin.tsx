import { Box, Button } from "@mui/material";

function Signin() {
  return (
    <>
      <Box sx={{ height: "20vh" }}>
        <Button sx={{}}>Home</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Button variant="outlined" size="large">
          Log In
        </Button>
      </Box>
    </>
  );
}

export default Signin;
