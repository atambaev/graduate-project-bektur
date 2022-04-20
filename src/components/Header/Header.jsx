import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <NavLink className="nav-item nav-title" to="/">
            SAYAKAT
          </NavLink>
          <NavLink className="nav-item" to="/discover">
            Discover
          </NavLink>
          <NavLink className="nav-item" to="/booking">
            Booking
          </NavLink>
          <NavLink className="nav-item" to="/trips">
            My trips
          </NavLink>
          <NavLink className="nav-item" to="/wishlist">
            Wishlist
          </NavLink>
          <NavLink className="nav-item" to="/">
            Cart
          </NavLink>
          <NavLink className="nav-item" to="/">
            Login
          </NavLink>
          <NavLink className="nav-item" to="/">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
