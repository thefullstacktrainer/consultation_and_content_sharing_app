import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Transactions = ({ transactions }) => {
    return (
        <>
            <h2>Transactions</h2>

            <ul className='mx-8 flex gap-6 my-8'>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <Link to={transaction.id}>
                            {transaction.details}
                        </Link>
                    </li>
                ))}
            </ul>

            <Outlet />
        </>
    )
}

export default Transactions;