import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr className={styles.row}>
    <td className={styles.item}>{type}</td>
    <td className={styles.item}>{amount}</td>
    <td className={styles.item}>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
