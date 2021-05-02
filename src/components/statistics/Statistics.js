import React from "react";
import propTypes from "prop-types";
import './Statistics.css';



const Statistics = ({ title, stats }) => (
  <section className="Statistics">
    {title && <h2 className="Statistics__title">{title}</h2>}

    <ul className="Statistics__stat-list">
      {stats.map(({ id, label, percentage }) => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        return (
        <li className="Statistics__stat-item" key={id} style={{backgroundColor: randomColor}}>
          <span className="Statistics__label">{label}</span>
          <span className="Statistics__percentage">{percentage}%</span>
        </li>
      )
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
