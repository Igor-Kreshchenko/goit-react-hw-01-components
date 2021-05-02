import React from "react";
import propTypes from "prop-types";
import defaultImg from "../profile/defaultAvatar.svg";
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span class="FriendList__status" style={{backgroundColor: isOnline ? "green" : "red"}}></span>
    <img class="FriendList__avatar" src={avatar} alt="" width="48" />
    <p class="FriendList__name">{name}</p>
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
