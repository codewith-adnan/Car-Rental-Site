import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayouts from "../layouts/AuthLayouts";
import MainLayout from "../layouts/MainLayout";

// AuthLayouts
import Login from "../auth/login";
import Register from "../auth/register";
import CreatePassword from "../auth/newPassword";
import ForgetPassword from "../auth/Forgget-password";
import OtpVerification from "../auth/OTP-page";
import Profile from "..//auth/Profile";

// MainLayouts
import Home from "../pages/Home";
import ContactUs from "../pages/contactUs";
import VehicleListing from "../pages/vehicle-Listing";
import VehicleDetails from "../pages/vehicle-Details";
import RentalForm from "../pages/Payment";
import Favourite from "../auth/Favourite";
import History from "../auth/History";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayouts />}>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forget_password" element={<ForgetPassword />} />
        <Route path="/auth/OTP-page" element={<OtpVerification />} />
        <Route path="/auth/newpassword" element={<CreatePassword />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="..//pages/Home" />} />
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/vehicle-listing" element={<VehicleListing />} />
        <Route path="/vehicle-Details" element={<VehicleDetails />} />
        <Route path="/Payment" element={<RentalForm />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/auth/Profile" element={<Profile />} />
        <Route path="/History" element={<History />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
