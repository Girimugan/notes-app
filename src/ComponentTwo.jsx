import React, { useContext, useReducer } from "react";
import { StyleContext } from "./StyleContext";

function ComponentTwo() {
  const { style, setStyle } = useContext(StyleContext);

  const updateStyle = () => {
    setStyle({
      ...style,
      color: "red",
      backgroundColor: "blue",
    });
  };

  const counter = (count, action) => {
    switch (action.type) {
      case "a":
        return count + 1
      case "b":
        return count - 2
      default:
        return count
    }
  }

  const [counts,dispatch] = useReducer(counter, 0)

  return (
    <div style={style}>
      <p>Component Two</p>
      <p>Count values {counts}</p>
      <button onClick={() => { dispatch({ type: "a" }) }}>incre</button>
      <button onClick={() => { dispatch({ type: "b" }) }}>decre</button>
      <button onClick={updateStyle}>Click Me</button>
    </div>
  );
}

export default ComponentTwo;