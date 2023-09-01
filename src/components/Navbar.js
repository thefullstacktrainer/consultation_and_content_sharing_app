import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mx-8 flex gap-6 my-8">
            <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} path="/" to={`/`}>Home</NavLink>
            {
                users.map((user, index) => {
                    return (
                        <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} key={index} to={`users/${user}`}>User {user}</NavLink>
                    )
                })
            }
        </div>
    )
}

export default Navbar