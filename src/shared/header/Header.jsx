import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
    <a className="btn btn-ghost normal-case text-xl ">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal items-center px-1">
    {
menu.map((n,index)=> <li key={index}><Link to={`${n.path}`}>{n.label}</Link></li>)
       }
       <button className='btn tn-ghost'>login</button>
    </ul>
  </div>

</div>
        </div>
    );
};

export default Header;