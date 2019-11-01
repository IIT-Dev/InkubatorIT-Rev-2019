import React from 'react';
import { Link } from 'gatsby';

import './scss/admin.scss';

import SEO from '../components/seo';
import Footer from '../components/Footer';

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
        <button>Manage Portfolio</button>
        <button>Manage Committee</button>
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
