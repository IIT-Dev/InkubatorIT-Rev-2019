import React, { useState } from 'react';
import { Link } from 'gatsby';

import './scss/admin.scss';

import SEO from '../components/seo';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie, faPlus } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/Project';

const AdminNavbar = props => {
  const { setMode } = props;

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
        <button onClick={() => setMode('portofolio')}>
          <FontAwesomeIcon icon={faLaptop} /> &nbsp; Manage Portfolio
        </button>
        <button onClick={() => setMode('people')}>
          <FontAwesomeIcon icon={faUserTie} /> &nbsp; Manage People
        </button>
      </div>
    </nav>
  );
};

const PortofolioManagement = () => {
  const dummyProjects = [
    { name: 'Aplikasi Web', url: 'https://via.placeholder.com/750x500', type: 'web' },
    { name: 'Aplikasi Mobile', url: 'https://via.placeholder.com/750x500', type: 'mobile' },
    { name: 'Aplikasi Desktop', url: 'https://via.placeholder.com/750x500', type: 'desktop' },
  ];

  return (
    <div className="portofolio-management">
      {dummyProjects.map((project, index) => (
        <Project {...project} key={index} admin />
      ))}
      <button className="add-portofolio-btn">
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
    </div>
  );
};

const PeopleManagement = () => {
  return <div className="people-management">people</div>;
};

const AdminPage = () => {
  const [mode, setMode] = useState('portofolio');

  return (
    <>
      <SEO title="Admin" />
      <section className="admin">
        <AdminNavbar setMode={setMode} />
        {mode === 'portofolio' && <PortofolioManagement />}
        {mode === 'people' && <PeopleManagement />}
      </section>
      <Footer />
    </>
  );
};

export default AdminPage;
