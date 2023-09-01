import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './UserDetails.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;