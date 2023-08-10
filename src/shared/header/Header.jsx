import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthProvider/AuthProvider';
import logo from '../../assets/logo.png' ;

const Header = () => {
const nevigate= useNavigate()

    const {user,handleSignOut} = useContext(UserContext);
    const menu =[
        {
            label:'Home',
            path:'/'
        },
        {
            label:'About',
            path:'/about'
        },
       
      
        {
            label:'Appointment',
            path:'/appointment'
        },
        {
            label:'My Dashboard',
            path:'/dashboard'
        },
    ]
    return (
        <div className=' bg-doctor-primary py-4 text-neutral-100'>
  <div className="navbar text-white w-3/4 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
menu.map((n,index)=> <li key={index}><Link to={`${n.path}`}>{n.label}</Link></li>)
       }
      </ul>
    </div>
   <Link to="/"> <img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal items-center px-1">
    {
menu.map((n,index)=> <li key={index}><Link to={`${n.path}`}>{n.label}</Link></li>)
       }

       {
        !user ? <button onClick={()=> nevigate('/login')} className='btn tn-ghost'>login</button> : <button onClick={handleSignOut} className='btn tn-ghost'>Logout</button>
       }
       
    </ul>
  </div>

</div>
        </div>
    );
};

export default Header;