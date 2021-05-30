import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency, id }) => (
  <tr className={styles.row} key={id}>
    <td className={styles.item}>{type}</td>
    <td className={styles.item}>{amount}</td>
    <td className={styles.item}>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Transaction;