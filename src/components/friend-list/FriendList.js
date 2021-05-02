import React from "react";
import FriendListItem from "./FriendListItem";
import propTypes from "prop-types";
import './FriendList.css';

const FriendList = ({ friends }) => (
  <ul className="FriendList">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="FriendList__item" key={id}>
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      </li>
    ))}
  </ul>
);

FileList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
