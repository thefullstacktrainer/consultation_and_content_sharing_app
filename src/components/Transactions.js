import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

const Transactions = ({ transactions }) => {
    const { transactionId } = useParams();
    const navigate = useNavigate();
    useEffect(() => { if (!transactionId) navigate("1") }, [transactionId])
    return (
        <>
            <h2>Transactions</h2>

            <ul className='mx-8 flex gap-6 my-8'>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <NavLink className={({ isActive }) => isActive ? 'fond-bold text-blue-700' : 'font-thin'} to={transaction.id}>
                            {transaction.details}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Outlet />
        </>
    )
}

export default Transactions;