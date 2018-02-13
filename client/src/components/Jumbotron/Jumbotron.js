import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{

      clear: "both",
      backgroundColor: "#E5E5E5E5",
      fontFamily: "Alegreya",
      h3: "#5d6e73"
    }}
    className="jumbotron"
    id="main"
  >
    {children}
  </div>
);

export default Jumbotron;