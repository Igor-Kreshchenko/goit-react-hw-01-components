import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friends}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
};

export default FriendList;
