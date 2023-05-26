import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import StyledNavbar from "../components/StyledxNavbar";

const SharedProductLayout = () => {
  return (
    <>
      {/* <StyledNavbar /> */}
      <h2>products</h2>
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

export default SharedProductLayout;
