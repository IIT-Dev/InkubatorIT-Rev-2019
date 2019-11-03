import React from 'react';
import { Link } from 'gatsby';

import './scss/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={require('../images/iit-logo-cropped.png')} alt="IIT Logo" />
        <div>
          <p className="title">Inkubator IT</p>
          <p className="subtitle">your IT-based solution</p>
        </div>
      </Link>
      <div className="buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/portofolio">
          <button>Portofolio</button>
        </Link>
        <Link to="/request">
          <button>Request</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;