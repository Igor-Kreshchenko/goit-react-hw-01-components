import React from 'react';
import FriendListItem from './FriendListItem';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friends}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={styles.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FileList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
