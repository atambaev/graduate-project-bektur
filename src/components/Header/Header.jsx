import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Header.scss";

const Header = () => {
  const { currentUser, logOutUser } = useAuth();
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <NavLink className="nav-item nav-title" to="/">
            SAYAKAT
          </NavLink>
          <NavLink className="nav-item" to="/discover">
            About
          </NavLink>
          <NavLink className="nav-item" to="/booking">
            Booking
          </NavLink>
          {/* <NavLink className="nav-item" to="/trips">
            My trips
          </NavLink> */}
          <NavLink className="nav-item" to="/wishlist">
            Wishlist
          </NavLink>
          <NavLink className="nav-item" to="/cart">
            Cart
          </NavLink>
          {currentUser.user === null ? (
            <NavLink className="nav-item" to="/login">
              Login
            </NavLink>
          ) : (
            <Button
              onClick={logOutUser}
              className="nav-item cur-user"
              to="/register"
            >
              Log out
            </Button>
          )}
          {currentUser.user === null ? (
            <NavLink className="nav-item" to="/register">
              Register
            </NavLink>
          ) : (
            <Button className="cur-user">{currentUser.user}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
