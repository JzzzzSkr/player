import React from 'react';
import './Right.scss';
import { Outlet } from 'react-router-dom';

const Right = () => {
    return (
        <div className='rightWrapper'>
            <Outlet></Outlet>
        </div>
    );
}

export default Right;
