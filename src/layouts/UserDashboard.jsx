import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserDashboard = () => {
  const menu = [
    {
      label: "Statistics",
      path: "/dashboard/statistics",
    },
    {
      label: "My Appointments",
      path: "/dashboard/my-appointments",
    },
    {
      label: "My History",
      path: "/dashboard/my-history",
    },
    {
      label: "My Review",
      path: "/dashboard/my-review",
    },
  
    {
      label: "Home",
      path: "/",
    },
  ];
  return (
    <div className="">
      <div>
        <ul className="mt-8 flex flex-col  space-y-3">
          {menu.map((n, index) => (
            <NavLink
              key={index}
              className= {({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-dashboard-body px-8 py-2 font-bold text-xl" : " font-semibold px-8 py-2 cursor-pointer  text-neutral-600 hover:bg-dashboard-body"
            } 
              to={`${n.path}`}
            >
              {n.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
