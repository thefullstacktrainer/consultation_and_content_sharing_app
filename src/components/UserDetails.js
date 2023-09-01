import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
    const { userId } = useParams();
    return (
        <>
            <h1 className="m-12">User {userId}</h1>

            <h2>User</h2>

            <nav className='mx-8 flex gap-6 my-8'>
                <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} to="profile">Profile</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} to="transactions">Transactions</NavLink>
            </nav>

            <Outlet />
        </>

    )
}

export default UserDetails;