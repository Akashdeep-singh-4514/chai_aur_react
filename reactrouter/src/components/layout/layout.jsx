import React from "react";
import HeaderComp from "../header/header";
import Footer from "../footer/footer";
// import HomePage from "../home/homePage";
// import Github from "../github/github";
// import Contact from "../contact/contact";
// import About from "../about/about";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
