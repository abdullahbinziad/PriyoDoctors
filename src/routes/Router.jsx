import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layouts/UserLayOut";
import Home from "../pages/home/home/Home";
import ErrorPage from "../components/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Appointment from "../pages/appointment/Appointment";
import DoctorsSingle from "../pages/doctors/doctors/DoctorsSingle";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayOut></UserLayOut>,
   
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/sign-up",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/appointment",
          element: <Appointment></Appointment>,
        },
        {
          path: "/doctors-signle",
          element: <DoctorsSingle></DoctorsSingle>,
        },
       
      ],
    },
  ]);

 
