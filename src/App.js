import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDetails from './components/UserDetails.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Transactions from './components/Transactions.js';
import NotFound from './components/NotFound.js';
import Layout from './components/Layout.js';
import Transaction from './components/Transaction.js';

function App() {
  const transactions = [
    { id: '1', details: 'Transaction 1' },
    { id: '2', details: 'Transactions 2' },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users/:userId" element={<UserDetails />} >
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="transactions" element={<Transactions transactions={transactions} />}>
              <Route path=':transactionId' element={<Transaction />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;