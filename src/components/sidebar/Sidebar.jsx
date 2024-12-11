import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/" end activeClassName="active">
          Home
        </NavLink>
        <NavLink to="profile" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="users" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="products" activeClassName="active">
          Products
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
