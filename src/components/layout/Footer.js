import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ company }) => {
  return (
    <>
      <footer className="w3-container w3-theme-d5 text-right">
        <p>Powered by {company} @2022</p>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  company: 'Company name',
};

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Footer;
