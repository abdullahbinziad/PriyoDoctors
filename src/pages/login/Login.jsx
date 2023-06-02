import React from "react";
import loginImg from "../../assets/login-page.png";
import "./login.css";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <div className="flex justify-between">
      <div
        id="loginBg"
        className="flex-1 flex items-center  bg-doctor-primary p-20 w-screen h-screen "
      >
        <img className="w-3/4  " src={loginImg} alt="" />
      </div>
      <div className="flex-1 justify-center flex items-center p-20 ">
        <div className=" p-10 shadow-md rounded-sm flex  flex-col ">
          <h1 className="text-3xl font-bold text-center mb-10 ">
            Login to Doc House
          </h1>
          <form className="space-y-3 my-3" action="">
            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Username or Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="input py-5 w-full bg-doctor-login-input"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your password"
                className="input py-5 w-full bg-doctor-login-input"
              />
            </div>
            <button className=" bg-doctor-btn text-white mt-2 input  w-full ">
              Sign In
            </button>
          </form>
          <button className="btn btn-outline  self-center  rounded-full w-20 "><FcGoogle className='text-xl'/> </button>

          <span className="flex justify-center">
            Please register at First ? <Link to="/sign-up"> SIGN UP</Link>{" "}
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
