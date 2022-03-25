import React, { useState } from "react";

const openStyle = {
  zIndex: 2,
  display: "block",
  width: 300,
  paddingTop: "10%",
  top: 0
};

const closeStyle = {
  zIndex: 2,
  display: "none",
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge"
        style={open ? openStyle : closeStyle}
        id="mySidebar"
      >
        <button
          href="#"
          onClick={() => setOpen(!open)}
          className="w3-bar-item w3-button w3-display-topright w3-text-teal"
        >
          Close
          <i className="fa fa-remove"></i>
        </button>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 4
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 5
        </a>
      </nav>
      <div className="w3-container" style={{ position: "relative" }}>
        <button
          onClick={() => setOpen(!open)}
          className="w3-button w3-xlarge w3-circle w3-teal"
          style={{ position: "absolute", top: -28, right: 24 }}
        >
          +
        </button>
      </div>
    </>
  );
}
