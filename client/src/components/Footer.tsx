import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLine, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './scss/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        <p>
          <span>
            <FontAwesomeIcon icon={faCopyright} color="white" size="1x" /> &nbsp;Inkubator IT HMIF 2019.
          </span>
          <span> All rights reserved.</span>
        </p>
      </div>
      <div className="icons">
        <a href="https://twitter.com/inkubatorIT" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
        </a>
        <a href="https://www.instagram.com/inkubatorit/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
        </a>
        <a href="https://line.me/ti/p/~@coq4661e" target="_blank">
          <FontAwesomeIcon icon={faLine} size="2x" className="icon" />
        </a>
        <a href="https://facebook.com/inkubatorithmif/" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
