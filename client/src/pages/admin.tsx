import React from 'react';
import { Link } from 'gatsby';

import './scss/admin.scss';

import SEO from '../components/seo';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const Navbar = (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={require('../images/iit-logo-cropped.png')} alt="IIT Logo" />
        <div>
          <p className="title">Inkubator IT</p>
          <p className="subtitle">your IT-based solution</p>
        </div>
      </Link>
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faLaptop} /> &nbsp; Manage Portfolio
        </button>
        <button>
          <FontAwesomeIcon icon={faUserTie} /> &nbsp; Manage People
        </button>
      </div>
    </nav>
  );

  return (
    <>
      <SEO title="Admin" />
      <section className="admin">{Navbar}</section>
      <Footer />
    </>
  );
};

export default AdminPage;
