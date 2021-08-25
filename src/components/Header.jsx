import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <HighlightIcon
        style={{
          color: "white",
          display: "inline",
          marginRight: "10px",
          fontSize: "2rem"
        }}
      />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
