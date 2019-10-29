import React from 'react';

import './scss/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={require('../images/iit-logo-cropped.png')} alt="IIT Logo" />
        <div>
          <p className="title">Inkubator IT</p>
          <p className="subtitle">your IT-based solution</p>
        </div>
      </div>
      <div className="buttons">
        <button>Home</button>
        <button>About Us</button>
        <button>Portofolio</button>
        <button>Request</button>
      </div>
    </nav>
  );
};

export default Navbar;
