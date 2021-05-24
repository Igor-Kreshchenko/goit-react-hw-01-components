import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactions}>
    <thead className={styles.head}>
      <tr>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={styles.row} key={id}>
          <Transaction type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default TransactionHistory;
