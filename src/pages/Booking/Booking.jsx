import React from "react";
import "./Booking.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import TripList from "../../components/Trips/TripList/TripList";
import Header from "../../components/Header/Header";
import LiveSearch from "../../components/LiveSearch/LiveSearch";
import Filter from "../../components/Trips/Filter/Filter";

const Booking = () => {
  return (
    <div className="booking-img">
      <Header />
      <div className="booking-outer">
        <div className="container">
          <div className="booking">
            <p className="page-title">SEE OUR TRIPS</p>

            <TripList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
