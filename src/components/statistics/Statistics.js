import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);

        return (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randomColor }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
