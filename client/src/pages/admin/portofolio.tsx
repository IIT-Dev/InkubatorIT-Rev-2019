import React from 'react';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../scss/admin/portofolio.scss';

import SEO from '../../components/seo';
import Footer from '../../components/Footer';
import Project from '../../components/Project';

import { dummyProjects } from '../../data/portofolio';
import Navbar from '../../components/Navbar';

const Alert = withReactContent(Swal);

const AdminNavbar = props => {
  const { setMode } = props;

  return (
    <Navbar>
      <button className="manage-btn" onClick={() => setMode('portofolio')}>
        <FontAwesomeIcon icon={faLaptop} />
        <span>Manage Portofolio</span>
      </button>
      <button className="manage-btn" onClick={() => setMode('people')}>
        <FontAwesomeIcon icon={faUserTie} />
        <span>Manage People</span>
      </button>
    </Navbar>
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

const AdminPage = () => {
  return (
    <>
      <SEO title="Admin" />
      <section className="admin">
        <AdminNavbar />
        <PortofolioManagement />
      </section>
      <Footer />
    </>
  );
};

export default AdminPage;
