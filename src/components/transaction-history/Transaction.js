import React from "react";
import propTypes from "prop-types";
import './TransactionHistory.css';

const Transaction = ({type, amount, currency}) => (
    <>
        <td className="TransactionHistory__item">{type}</td>
        <td className="TransactionHistory__item">{amount}</td>
        <td className="TransactionHistory__item">{currency}</td>
    </>
);

Transaction.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
}

export default Transaction;