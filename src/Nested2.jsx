import React from "react";
import { useParams } from "react-router-dom";

function Nested2() {
    const { id } = useParams();

     return (
    <div>
      <h1> User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}


export default Nested2;