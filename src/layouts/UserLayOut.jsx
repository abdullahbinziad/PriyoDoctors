import React from "react";
import Header from "../shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const UserLayOut = () => {
  return (
    <div>
      <Header></Header>
     <div className="">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default UserLayOut;
