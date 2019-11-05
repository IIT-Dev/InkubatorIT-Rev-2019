import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserTie, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../scss/admin/people.scss';

import SEO from '../../components/seo';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AdminNavbar = props => {
  const { setMode } = props;

  return (
    <Navbar>
      <button className="manage-btn">
        <FontAwesomeIcon icon={faLaptop} />
        <span>Manage Portofolio</span>
      </button>
      <button className="manage-btn">
        <FontAwesomeIcon icon={faUserTie} />
        <span>Manage People</span>
      </button>
    </Navbar>
  );
};

const PeopleManagement = () => {
  return (
    <>
      <SEO title="Admin" />
      <section className="admin">
        <AdminNavbar />
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
      </section>
      <Footer />
    </>
  );
};

export default PeopleManagement;
