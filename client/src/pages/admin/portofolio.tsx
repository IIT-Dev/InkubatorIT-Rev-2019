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

export const PortofolioForm = () => {
  const { newPortofolio, setNewPortofolio, editNewPortofolioValue } = usePortofolios();

  const renderTypeButton = (platform: string) => {
    let backgroundColor = 'var(--primary)';
    if (newPortofolio.platform.toLowerCase() === platform.toLowerCase()) backgroundColor = 'var(--secondary)';

    return (
      <button style={{ backgroundColor }} onClick={() => setNewPortofolio({ ...newPortofolio, platform })}>
        {platform}
      </button>
    );
  };

  return (
    <div className="add-portofolio-form">
      <input
        type="text"
        id="title"
        placeholder="Nama proyek"
        value={newPortofolio.title}
        onChange={editNewPortofolioValue}
      />
      <input
        type="text"
        id="description"
        placeholder="Deskripsi Singkat"
        value={newPortofolio.description}
        onChange={editNewPortofolioValue}
      />
      <div className="types">
        {renderTypeButton('Web')}
        {renderTypeButton('Mobile')}
        {renderTypeButton('Desktop')}
      </div>
      <div className="img">
        <img src="https://via.placeholder.com/750x500" alt="Nama proyek" />
      </div>
    </div>
  );
};

const PortofolioManagement = () => {
  const { portofolios, deleteSelectedPortofolio } = usePortofolios();

  const actionOpenAddPortofolioAlert = () => {
    Alert.fire({
      title: <p>Tambah Portofolio</p>,
      html: <PortofolioForm />,
      showCancelButton: true,
      confirmButtonColor: 'var(--tertiary)',
      confirmButtonText: 'Tambahkan',
    }).then(result => {
      if (result.value) {
        Alert.fire('Sukses!', 'Portofolio berhasil ditambahkan', 'success');
      }
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
