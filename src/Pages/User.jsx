
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./User.css"; 

const User = () => {
  return (
    <div className="user-container">

      <div className="layout">
        <aside className="sidebar">
          <h3 className="menu-title">Menu</h3>
          <nav className="menu">
            <NavLink to="profile" className="menu-link">
              Profile
            </NavLink>
            <NavLink to="setting" className="menu-link">
              Location
            </NavLink>
          </nav>
        </aside>

      
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default User;
