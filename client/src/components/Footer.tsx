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
          <FontAwesomeIcon icon={faCopyright} color="white" size="1x" /> Inkubator IT HMIF 2019.
        </p>
        <div>
          <p>Sekretariat HMIF Gedung Benny Subianto.</p>
          <p>Institut Teknologi Bandung, Jalan Ganesha No.10, Bandung.</p>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
        <FontAwesomeIcon icon={faLine} size="2x" className="icon" />
        <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
