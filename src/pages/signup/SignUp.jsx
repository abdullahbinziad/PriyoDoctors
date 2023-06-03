import React, { useContext } from "react";
import loginImg from "../../assets/login-page.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
const {handleSignUpWithEmailPass,updateUsersProfile,handleSignWithGoogle} = useContext(UserContext);
const { register, handleSubmit,reset } = useForm();
const nevigate= useNavigate()


const onSubmit=(data) =>{
    console.log(data);
    handleSignUpWithEmailPass(data.email, data.password).then((user) => {
      console.log(user);
      updateUsersProfile(data.name).then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "User Registration Completed",
          text: "",
        });
        nevigate('/')
      });
      console.log(data);
      reset();
    });
}
// user,
// handleSignUpWithEmailPass,
// handleSignWithGoogle,
// handleSignInWithEmailPass,
// updateUsersProfile,
// handleSignOut,
// loading


  return (
    <div className="flex justify-between">
      <div
        id="loginBg"
        className="flex-1 flex items-center  bg-doctor-primary p-20 w-screen h-screen "
      >
        <img className="w-3/4  " src={loginImg} alt="" />
      </div>
      <div className="flex-1 justify-center flex items-center p-20 w-screen h-screen">
        <div className=" p-10 shadow-md rounded-sm flex  flex-col">
          <h1 className="text-3xl font-bold text-center mb-10 ">
            Sign Up to Doc House
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 my-3" action="">
            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Name</span>
              </label>
              <input
              {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                className="input py-5 w-full bg-doctor-login-input"
              />
            </div>
         
            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Email</span>
              </label>
              <input
              {...register("email")}
                type="text"
                placeholder="Enter Your Email"
                className="input py-5 w-full bg-doctor-login-input"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Password</span>
              </label>
              <input
              {...register("password")}
                type="text"
                placeholder="Enter Your password"
                className="input py-5 w-full bg-doctor-login-input"
              />
            </div>
            <button type="submit" className=" bg-doctor-btn text-white mt-2 input  w-full ">
              Create Account
            </button>
          </form>

          <button  onClick={() => {
                    handleSignWithGoogle()
                      .then((data) => {
                        console.log(data);
                        if (data) {
                          nevigate("/");
                        }
                        reset();
                      })
                      .catch();
                  }}  className="btn btn-outline  self-center  rounded-full w-20 ">
            <FcGoogle className="text-xl" />{" "}
          </button>

          <span className="flex justify-center">
            Already registered? Go to <Link to="/login"> SIGN IN</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
