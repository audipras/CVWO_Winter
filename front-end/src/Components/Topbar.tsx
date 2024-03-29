import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { AccountCircle } from "@mui/icons-material";
import ProfileMenu from "./ProfileMenu";
import { Box, typography } from "@mui/system";
import { relative } from "path";

function Topbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginTop: "5px",
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          height: "8vh",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div>
          <Tooltip title="Home" arrow>
            <Link to="/Home" style={linkStyle}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src="/Minun.png" alt="Minun" width="75" height="75" />
                <Typography
                  fontSize="30px"
                  style={{ position: "relative", top: "5px" }}
                >
                  Circles
                </Typography>
              </Box>
            </Link>
          </Tooltip>
        </div>
        <div>
          <ProfileMenu></ProfileMenu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
