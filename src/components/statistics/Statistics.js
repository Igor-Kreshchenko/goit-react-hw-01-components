import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatItem';
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
            <StatItem label={label} percentage={percentage} />
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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
