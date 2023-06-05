import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrump.css'

const Breadcrumb = ({routePath,Title}) => {
    return (
        <div  className='bg-doctor-primary h-64 w-full'>
        <div id='breadcrump' className='  flex justify-start items-center h-full  w-3/4 mx-auto'>
            <div className=''>
                <h1 className='text-white font-semibold'><Link to='/'>Home</Link> / <Link to={`/${routePath}`}>{Title}</Link></h1>
                <h1 className='text-3xl font-bold text-white py-5'>{Title}</h1>
            </div>
        </div>
        </div>
    );
};

export default Breadcrumb;