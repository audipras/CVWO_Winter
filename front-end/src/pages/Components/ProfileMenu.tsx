import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const IconWithTooltipAndMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginTop: "5px",
  };

  return (
    <div>
      <Tooltip title="Profile" arrow>
        <IconButton onClick={handleOpenMenu}>
          <AccountCircle sx={{ color: "#ffffff", fontSize: "50px" }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Link to="/profile" style={linkStyle}>
            Edit Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default IconWithTooltipAndMenu;
