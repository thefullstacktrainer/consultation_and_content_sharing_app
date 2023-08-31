import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserDetails from './UserDetails.js';
import './App.css';

function App() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="">
      <div className="mx-8 flex gap-6 my-8">
        {
          users.map((user, index) => {
            return (
              <Link key={index} to={`users/${user}`}>User {user}</Link>
            )
          })
        }
      </div>
      <Routes>
        <Route path="users/:userId" element={<UserDetails />} />
      </Routes>

    </div>
  );
}

export default App;