import React from 'react';
import { Outlet } from 'react-router-dom';

const Essential = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Essential;