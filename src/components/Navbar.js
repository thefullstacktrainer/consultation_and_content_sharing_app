import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mx-8 flex gap-6 my-8">
            <Link path="/" to={`/`}>Home</Link>
            {
                users.map((user, index) => {
                    return (
                        <Link key={index} to={`users/${user}`}>User {user}</Link>
                    )
                })
            }
        </div>
    )
}

export default Navbar