import React from "react";
import propTypes from "prop-types";
import defaultImg from "./defaultAvatar.svg";
import './Profile.css';

const Profile = ({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className="Profile">
    <div className="Profile__description">
      <img src={avatar} alt="Аватар пользователя" className="Profile__avatar" />
      <p className="Profile__name">{name}</p>
      <p className="Profile__tag">@{tag}</p>
      <p className="Profile__location">{location}</p>
    </div>

    <ul className="Profile__stats">
      <li className="Profile__stats-item">
        <span className="Profile__label">Followers</span>
        <span className="Profile__quantity">{followers}</span>
      </li>
      <li className="Profile__stats-item">
        <span className="Profile__label">Views</span>
        <span className="Profile__quantity">{views}</span>
      </li>
      <li className="Profile__stats-item">
        <span className="Profile__label">Likes</span>
        <span className="Profile__quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
