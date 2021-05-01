import React from "react";
import FriendListItem from "./FriendListItem";
import propTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li class="item" key={id}>
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
