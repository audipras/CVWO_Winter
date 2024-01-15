import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { AccountCircle } from "@mui/icons-material";
import ProfileMenu from "./ProfileMenu";

function Topbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginTop: "5px",
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          height: "8vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Tooltip title="Home" arrow>
            <Link to="/Home" style={linkStyle}>
              <HomeIcon sx={{ fontSize: "50px" }} />
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
