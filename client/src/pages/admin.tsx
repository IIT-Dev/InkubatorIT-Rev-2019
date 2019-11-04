import React, { useState } from 'react';
import { Link } from 'gatsby';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie, faPlus } from '@fortawesome/free-solid-svg-icons';

import './scss/admin.scss';

import SEO from '../components/seo';
import Footer from '../components/Footer';
import Project from '../components/Project';

import { dummyProjects } from '../data/portofolio';

const Alert = withReactContent(Swal);

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
  const actionOpenAddPortofolioAlert = () => {
    Alert.fire({
      title: <p>Tambah Portofolio</p>,
      html: (
        <div className="add-portofolio-form">
          <input type="text" placeholder="Nama proyek" />
          <input type="text" placeholder="Deskripsi Singkat" />
          <div className="types">
            <button>Web</button>
            <button>Mobile</button>
            <button>Desktop</button>
          </div>
          <div className="img">
            <img src="https://via.placeholder.com/750x500" alt="Nama proyek" />
          </div>
        </div>
      ),
      confirmButtonColor: 'var(--tertiary)',
    });
  };

  return (
    <div className="portofolio-management">
      <h1>
        <span>Portofolio</span>
      </h1>
      <div className="projects">
        {dummyProjects.map((project, index) => (
          <Project {...project} key={index} admin />
        ))}
        <button
          className="add-portofolio-btn"
          data-tip="Tambah portofolio"
          data-for="portofolio-add"
          onClick={actionOpenAddPortofolioAlert}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </button>
        <ReactTooltip place="left" type="dark" effect="solid" id="portofolio-add" />
      </div>
    </div>
  );
};

const PeopleManagement = () => {
  return (
    <div className="people-management">
      <h1>
        <span>Pengurus</span>
      </h1>
      <div className="people">
        <input type="text" className="people-name" placeholder="Nama" />
        <input type="text" className="people-position" placeholder="Jabatan" />
        <div className="img">
          <img src="https://via.placeholder.com/750x500" alt="Wildan Dicky Alnatara" />
        </div>
        <div className="btn-group">
          <button className="btn btn-add">Tambah</button>
          <button className="btn btn-edit">Sunting</button>
          <button className="btn btn-remove">Hapus</button>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const [mode, setMode] = useState('people');

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
