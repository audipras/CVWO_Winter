import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { AccountCircle } from "@mui/icons-material";

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
          <Link to="/Home" style={linkStyle}>
            <HomeIcon sx={{ fontSize: "50px" }} />
          </Link>
        </div>
        <div>
          <Link to="/Profile" style={linkStyle}>
            <AccountCircle sx={{ fontSize: "50px" }} />{" "}
            {
              //remember to change AccountCircle to pfp in the future
            }
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
