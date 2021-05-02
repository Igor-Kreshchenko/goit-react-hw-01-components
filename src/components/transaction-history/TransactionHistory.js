import React from "react";
import propTypes from "prop-types";
import Transaction from "./Transaction";
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => (
  <table className="TransactionHistory">
    <thead className="TransactionHistory__head">
      <tr>
        <th className="TransactionHistory__head-item">Type</th>
        <th className="TransactionHistory__head-item">Amount</th>
        <th className="TransactionHistory__head-item">Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className="TransactionHistory__row" key={id}>
          <Transaction type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired })
  ).isRequired,
};

export default TransactionHistory;
