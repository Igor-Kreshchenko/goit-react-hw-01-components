import React from 'react';
import propTypes from 'prop-types';
import defaultImg from '../profile/defaultAvatar.svg';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
