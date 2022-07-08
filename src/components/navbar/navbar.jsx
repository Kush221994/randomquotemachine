import React from "react";
import { IconButton } from "@mui/material";

import img1 from "../../assets/git.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbuttons">
          <a href="https://github.com/Kush221994/drum-machine" target="_blank">
            <IconButton color="primary">
              <img src={img1} className="img" />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
