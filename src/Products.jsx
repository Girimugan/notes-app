import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Products.css";

const Products = () => {
  return (
    <div style={{ display: "flex" }}>

      <div className="box7">
        <div className="box8">
          <Link to="profile"><h5>Profile</h5></Link>
        </div>
        <div className="box9">
          <Link to="setting"><h5>Setting</h5></Link>
        </div>
      </div>

      
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Products;


