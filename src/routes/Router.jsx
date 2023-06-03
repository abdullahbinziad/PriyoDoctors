import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layouts/UserLayOut";
import Home from "../pages/home/home/Home";
import ErrorPage from "../components/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Appointment from "../pages/appointment/Appointment";
import DoctorsSingle from "../pages/doctors/doctors/DoctorsSingle";
import Essential from "../layouts/Essential";
import DashboardLayouts from "../layouts/DashboardLayouts";
import AllUser from "../dashboard/adminDashboard/AllUser";
import AddDoctors from "../dashboard/adminDashboard/AddDoctors";
import ManageDoctors from "../dashboard/adminDashboard/ManageDoctors";
import UpdateDoctorsData from "../dashboard/adminDashboard/UpdateDoctorsData";

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
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/doctors-signle",
        element: <DoctorsSingle></DoctorsSingle>,
      },
     
    ],
  },
  {
    path:'/',
    element:<Essential></Essential>,
    children:[
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ]
  },
  {
    path:'/dashboard',
    element:<DashboardLayouts></DashboardLayouts>,
    children:[
     {
      path:'/dashboard/all-users',
      element:<AllUser></AllUser>

     },
     {
      path:'/dashboard/addDoctors',
      element:<AddDoctors></AddDoctors>

     },
    
     {
      path:'/dashboard/manageDoctors',
      element:<ManageDoctors></ManageDoctors>

     },
     {
      path:'/dashboard/UpdateDoctorsData/:id',
      element:<UpdateDoctorsData></UpdateDoctorsData>,
      loader: ({params})=> fetch(`http://localhost:3000/doctors/${params.id}`)

     },
    ]
  }
]);
