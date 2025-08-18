import React, { useContext } from "react";
import { StyleContext } from "./StyleContext";

function ComponentOne() {
  const { style, setStyle } = useContext(StyleContext);

  const updateStyle = () => {
    setStyle({
      ...style,
      color: "blue",
      backgroundColor: "gray",
    });
  };

  return (
    <div style={style}>
      <p>Component One</p>
      <button onClick={updateStyle}>Click Me</button>
    </div>
  );
}

export default ComponentOne;