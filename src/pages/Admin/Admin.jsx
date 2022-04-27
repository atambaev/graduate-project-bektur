import React from "react";
import { Container, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Admin.scss";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div className="back-img1">
      <Header />
      <Container maxWidth="lg">
        {pathname !== "/admin/add" ? (
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="add"
          >
            <IconButton>
              <h3>Add new trip</h3>
              <br />
              <AddCircleIcon fontSize="large" color="" />
            </IconButton>
          </Link>
        ) : null}

        <Outlet />
      </Container>
      <br />
    </div>
  );
};

export default Admin;
