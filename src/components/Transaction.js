import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Transaction = () => {
    const { transactionId } = useParams();

    return (
        <>
            <h2>Transaction Id: {transactionId}</h2>
            <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700 mx-8 flex gap-6 my-8' : 'font-thin mx-8 flex gap-6 my-8'} to={-1}>Back to Transactions</NavLink>
        </>
    )
}

export default Transaction;