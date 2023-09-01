import React from 'react'
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

function UserDetails() {
    const { userId } = useParams();
    return (
        <>
            <h1 className="text-indigo-600 m-12">User {userId}</h1>

            <h2>User</h2>

            <nav className='mx-8 flex gap-6 my-8'>
                <Link to="profile">Profile</Link>
                <Link to="transactions">Transactions</Link>
            </nav>

            <Outlet />
        </>

    )
}

export default UserDetails;