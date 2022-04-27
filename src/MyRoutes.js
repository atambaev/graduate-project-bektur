import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayot from "./layouts/MainLayot";
import Booking from "../src/pages/Booking/Booking";
import Discover from "../src/pages/Discover/Discover";
import ErrorPage from "../src/pages/ErrorPage/ErrorPage";
import Home from "../src/pages/Home/Home";
import MyTrips from "./pages/MyTrips/MyTrips";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./components/Auth/RequireAuth";
import Admin from "./pages/Admin/Admin";
import List from "./components/Admin/List/List";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import TripDetail from "./pages/TripDetail/TripDetail";
import Payment from "./pages/Payment/Payment";
import Invoice from "./pages/Invoice/Invoice";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { useAuth } from "./contexts/AuthContextProvider";

const MyRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route element={<MainLayot />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/discover" element={<Discover />} />
        {/* <Route path="/trips" element={<MyTrips />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking/detail/:prodId" element={<TripDetail />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>{currentUser.isAdmin && <Admin />}</RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
