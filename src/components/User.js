import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
    return (
        <>
            <h2>User</h2>

            <nav className='mx-8 flex gap-6 my-8'>
                <Link to="profile">Profile</Link>
                <Link to="transactions">Transactions</Link>
            </nav>

            <Outlet />
        </>
    )
}

export default User;