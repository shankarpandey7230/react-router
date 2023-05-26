import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      {/* <section className="section"> */}
      {/* <h2>Home Page</h2> */}
      {/* <Link to="/about" className="btn">
        About
      </Link> */}
      <Outlet />
      {/* </section> */}
    </>
  );
};

export default SharedLayout;
