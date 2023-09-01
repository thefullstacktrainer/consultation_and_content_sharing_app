import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Transaction = () => {
    const { transactionId } = useParams();

    return (
        <>
            <h2>Transaction Id: {transactionId}</h2>
            <Link classname="mx-8 flex gap-6 my-8" to={-1}>Back to Transactions</Link>
        </>
    )
}

export default Transaction;