import React, { useContext, useReducer } from "react";
import { StyleContext } from "./StyleContext";

function ComponentThree() {
  const { style, setStyle } = useContext(StyleContext);

  const updateStyle = () => {
    setStyle({
      ...style,
      color: "orange",
      backgroundColor: "green",
    });
  };


  const counter = (count, action) => {
    switch (action.type) {
      case "a":
        return count + 1
      case "b":
        return count - 1
      default:
        return count
    }

  }

  const [counts, dispatch] = useReducer(counter, 0)
  return (
    <div style={style}>
      <p>Component Three</p>
      <p>counter value {counts}</p>
      <button onClick={() => { dispatch({ type: "a", payload:{}}) }}>incre</button>
      <button onClick={() => { dispatch({ type: "b" }) }}>decr</button>


      <button onClick={updateStyle}>Click Me</button>
    </div>
  );
}

export default ComponentThree;