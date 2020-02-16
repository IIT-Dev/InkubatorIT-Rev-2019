import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie, faBriefcase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './scss/Navbar.scss';
import { logOut } from '../helpers/auth';

export const Navbar = props => {
  const { children } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={require('../images/iit-logo-cropped.png')} alt="IIT Logo" />
        <div>
          <p className="title">Inkubator IT</p>
          <p className="subtitle">your IT-based solution</p>
        </div>
      </Link>
      <div className={`buttons ${isMenuOpen ? 'is-active' : ''}`}>{children}</div>
      <button
        type="button"
        className={`hamburger hamburger--spin ${isMenuOpen ? 'is-active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
};

export const VisitorNavbar = () => (
  <Navbar>
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
  </Navbar>
);

export const AdminNavbar = () => {
  return (
    <Navbar>
      <Link to="/admin/people">
        <button className="manage-btn">
          <FontAwesomeIcon icon={faUserTie} />
          <span>Manage People</span>
        </button>
      </Link>
      <Link to="/admin/portofolio">
        <button className="manage-btn">
          <FontAwesomeIcon icon={faLaptop} />
          <span>Manage Portofolio</span>
        </button>
      </Link>
      <Link to="/admin/client">
        <button className="manage-btn">
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Manage Client</span>
        </button>
      </Link>
      <button className="manage-btn" onClick={logOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Log Out</span>
      </button>
    </Navbar>
  );
};
