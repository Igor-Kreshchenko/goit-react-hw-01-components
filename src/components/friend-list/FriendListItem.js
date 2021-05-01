import React from "react";
import propTypes from "prop-types";
import defaultImg from "../profile/defaultAvatar.svg";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="" width="48" />
    <p class="name">{name}</p>
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
