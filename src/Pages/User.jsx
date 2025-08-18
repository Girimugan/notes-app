
import React from "react";
import Products from "../Products";


const User = () => {
  const bgStyle1 = {
    backgroundColor:'lightgray',
    width: '100%',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
  };
  return (
    <div>
      <div style={bgStyle1}>
      <Products/>
      

      </div>
      
    </div>
  );
};

export default User;

