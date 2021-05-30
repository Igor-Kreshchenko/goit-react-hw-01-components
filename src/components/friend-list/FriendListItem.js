import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../images/defaultAvatar.svg';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
