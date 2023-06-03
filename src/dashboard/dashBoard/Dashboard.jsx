import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const menu=[
        {
            label: 'Statistics',
            path:'/dashboard/statistics',
        },
        {
            label: 'All Users',
            path:'/dashboard/all-users',
        },
        {
            label: 'Add a Doctor',
            path:'/dashboard/addDoctors',
        },
        {
            label: 'Manage Doctors',
            path:'/dashboard/manageDoctors',
        },
        {
            label: 'Home',
            path:'/',
        },
    ]
    return (
        <div className=''>
            <div>
                <ul className='mt-8  space-y-3'>
                  {
                    menu.map((n,index)=>   <li key={index} className='text-xl font-semibold px-8 py-2 cursor-pointer  text-neutral-600 hover:bg-dashboard-body'><Link to={`${n.path}`}>{n.label}</Link></li>)
                  }
           
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;