import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayot from "./layouts/MainLayot";
import Booking from "./pages/Booking";
import Discover from "./pages/Discover";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import Wishlist from "./pages/Wishlist";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayot />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
