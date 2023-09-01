import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const User = () => {
    return (
        <>
            <h2>User</h2>

            <nav className='mx-8 flex gap-6 my-8'>
                <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} to="profile">Profile</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} to="transactions">Transactions</NavLink>
            </nav>

            <Outlet />
        </>
    )
}

export default User;