import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;