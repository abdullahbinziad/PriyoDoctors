import React from 'react';
import loginImg from '../../assets/login-page.png';
import './signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex justify-between'>
           <div id='loginBg' className='flex-1 flex items-center  bg-doctor-primary p-20 w-screen h-screen '>
<img className='w-3/4  ' src={loginImg} alt="" />

           </div>
           <div className='flex-1 justify-center flex items-center p-20 '>
<div className=' p-10 shadow-md rounded-sm '>
<h1 className='text-3xl font-bold text-center mb-10 '>Sign Up to Doc House</h1>
<form className='space-y-3 my-3' action="">

<div className="form-control w-full ">
  <label className="label">
    <span className="text-xl font-bold">Name</span>
  </label>
  <input type="text" placeholder="Enter Your Name" className="input py-5 w-full bg-doctor-login-input" />
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="text-xl font-bold">Username</span>
  </label>
  <input type="text" placeholder="Enter Your Username" className="input py-5 w-full bg-doctor-login-input" />
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="text-xl font-bold">Email</span>
  </label>
  <input type="text" placeholder="Enter Your Email" className="input py-5 w-full bg-doctor-login-input" />
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="text-xl font-bold">Password</span>
  </label>
  <input type="text" placeholder="Enter Your password" className="input py-5 w-full bg-doctor-login-input" />
</div>
<button className=' bg-doctor-btn text-white mt-2 input  w-full '>Create Account</button>
</form>

<span className='flex justify-center'>Already registered? Go to   <Link to="/login">  SIGN IN</Link> </span>
</div>

           </div>
        </div>
    );
};

export default SignUp;