import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLine, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './scss/Footer.scss';

export const Footer = () => {
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
        <a href="https://twitter.com/inkubatorIT" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.instagram.com/inkubatorit/" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://line.me/ti/p/~@coq4661e" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faLine} className="icon" />
        </a>
        <a href="https://facebook.com/inkubatorithmif/" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
      </div>
    </footer>
  );
};
