import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Invoice.scss";

const Invoice = () => {
  return (
    <div className="invoice-outer">
      <Header />
      <div className="invoice">
        <div className="container">
          <h2>
            We appreciate your choosing us! We’re so glad that you found what
            you were looking for. Detailed information about your trip was sent
            to your email address. Have a nice journey through the Kyrgyz
            Republic! See you soon 😊
          </h2>
          <Button
            className="btn-all"
            variant="outlined"
            component={Link}
            to="/booking"
          >
            Return to trips
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
