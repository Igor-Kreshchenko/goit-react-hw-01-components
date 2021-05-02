import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
  <>
    <td className={styles.item}>{type}</td>
    <td className={styles.item}>{amount}</td>
    <td className={styles.item}>{currency}</td>
  </>
);

Transaction.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default Transaction;
