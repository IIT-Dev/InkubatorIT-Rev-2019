import React from 'react';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../scss/admin/portofolio.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';
import { Project } from '../../components/Project';

import { usePortofolios } from '../../hooks/usePortofolios';

const Alert = withReactContent(Swal);

const PortofolioManagement = () => {
  const { portofolios, deleteSelectedPortofolio } = usePortofolios();

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
        {portofolios.map((portofolio, index) => (
          <Project
            {...portofolio}
            admin
            key={index}
            removePortofolio={(_id: string) => deleteSelectedPortofolio(_id)}
          />
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
    <AdminLayout>
      <SEO title="Admin" />
      <PortofolioManagement />
    </AdminLayout>
  );
};

export default AdminPage;
