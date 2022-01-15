import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userImage from '../../imgs/user1.jpeg';

const Header = ({ title }) => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-card w3-white w3-theme-d2 w3-left-align w3-large">
        <Link
          className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
          to="/"
        >
          <i className="fa fa-bars"></i>
        </Link>
        <Link
          to="/"
          className="w3-bar-item w3-button w3-padding-large w3-theme-d4 w3-hover-white"
        >
          <i className="fa fa-home w3-margin-right"></i>
          {title}
        </Link>
        <Link
          to="#"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="Personal website"
        >
          <i className="fa fa-globe"></i>
        </Link>
        <Link
          to="#"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="Mail me!"
        >
          <i className="fa fa-envelope"></i>
        </Link>
        <Link
          to="/aboutUs"
          className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-white"
          title="My Account"
        >
          <img
            src={userImage}
            className="w3-circle"
            style={{ height: '40px', width: '40px' }}
            alt="Shubham Sunny"
          />
        </Link>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Page Title',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
