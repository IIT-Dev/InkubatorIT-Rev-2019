import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby';

import '../scss/admin/portofolio.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';
import { Project } from '../../components/Project';
import Spinner from '../../components/Spinner';

import { usePortofolios } from '../../hooks/usePortofolios';
import { isAuthenticated } from '../../helpers/auth';

const Alert = withReactContent(Swal);

export const PortofolioForm = props => {
  const { portofolio } = props;
  const [image, setImage] = useState(null);

  const defaultValue = {
    title: (portofolio && portofolio.title) || '',
    description: (portofolio && portofolio.description) || '',
    platform: (portofolio && portofolio.platform) || '',
    imageUrl: (portofolio && portofolio.imageUrl) || null,
  };

  const actionSelectPortofolioImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const reader = new FileReader();

    if (!files) return;
    const file = files[0];

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') return;
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const renderImage = () => {
    let imgSrc: string;

    if (defaultValue.imageUrl) {
      if (image) {
        imgSrc = image;
      } else {
        imgSrc = defaultValue.imageUrl;
      }
    } else {
      imgSrc = image;
    }

    return <div className="img">{imgSrc && <img id="image" src={imgSrc} alt="Nama proyek" />}</div>;
  };

  return (
    <div className="add-portofolio-form">
      <input type="text" id="title" placeholder="Nama proyek" defaultValue={defaultValue.title} />
      <input type="text" id="description" placeholder="Deskripsi Singkat" defaultValue={defaultValue.description} />
      <select name="platform" id="platform" defaultValue={defaultValue.platform}>
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="desktop">Desktop</option>
      </select>
      {renderImage()}
      <div className="upload-img">
        <label htmlFor="new-portofolio-image">
          <img src={require('../../images/upload-photo.png')} alt="Upload portofolio" />
        </label>
        <input
          type="file"
          name="image"
          id="new-portofolio-image"
          accept="image/*"
          onChange={actionSelectPortofolioImage}
        />
      </div>
    </div>
  );
};

const PortofolioManagement = () => {
  const { portofolios, addNewPortofolio, editSelectedPortofolio, deleteSelectedPortofolio } = usePortofolios();
  const [loading, setLoading] = useState(false);

  const actionOpenAddPortofolioAlert = async () => {
    const alert = await Alert.fire({
      title: 'Tambah Portofolio',
      html: <PortofolioForm />,
      showCancelButton: true,
      confirmButtonColor: 'var(--tertiary)',
      confirmButtonText: 'Tambahkan',
      preConfirm: () => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLInputElement;
        const platformInput = document.getElementById('platform') as HTMLSelectElement;
        const imageInput = document.getElementById('image') as HTMLImageElement;

        return {
          title: titleInput.value,
          description: descriptionInput.value,
          platform: platformInput.value,
          imageUrl: imageInput.src,
        };
      },
    });

    if (alert.value) {
      setLoading(true);
      try {
        await addNewPortofolio(alert.value);
        setLoading(false);
        Alert.fire('Sukses!', 'Portofolio berhasil ditambahkan', 'success');
      } catch (e) {
        setLoading(false);
        Alert.fire('Ada kesalahan', e.message, 'error');
      }
    }
  };

  const actionOpenEditPortofolioAlert = async (index: number) => {
    const alert = await Alert.fire({
      title: 'Edit Portofolio',
      html: <PortofolioForm portofolio={portofolios[index]} />,
      showCancelButton: true,
      confirmButtonColor: 'var(--tertiary)',
      confirmButtonText: 'Update',
      preConfirm: () => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLInputElement;
        const platformInput = document.getElementById('platform') as HTMLSelectElement;
        const imageInput = document.getElementById('image') as HTMLImageElement;

        return {
          title: titleInput.value,
          description: descriptionInput.value,
          platform: platformInput.value,
          imageUrl: imageInput.src,
        };
      },
    });

    if (alert.value) {
      setLoading(true);
      try {
        await editSelectedPortofolio({ ...portofolios[index], ...alert.value });
        setLoading(false);
        Alert.fire('Sukses!', 'Portofolio berhasil diubah', 'success');
      } catch (e) {
        setLoading(false);
        Alert.fire('Ada kesalahan', e.message, 'error');
      }
    }
  };

  const actionDeletePortofolio = async (_id: string) => {
    setLoading(true);
    try {
      await deleteSelectedPortofolio(_id);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Alert.fire('Ada kesalahan', e.message, 'error');
    }
  };

  const renderContent = () => {
    if (portofolios === null) {
      return <Spinner />;
    }
    if (portofolios.length === 0) {
      return <p className="notice">Kamu belum nambahin portofolio</p>;
    }
    return portofolios.map((portofolio, index) => (
      <Project
        {...portofolio}
        admin
        key={index}
        editPortofolio={() => actionOpenEditPortofolioAlert(index)}
        removePortofolio={(_id: string) => actionDeletePortofolio(_id)}
      />
    ));
  };

  return (
    <div className="portofolio-management">
      <h1>
        <span>Portofolio</span>
      </h1>
      <div className="projects">
        {renderContent()}
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
      {loading && <Spinner />}
    </div>
  );
};

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    setAuthenticated(true);
  }, []);

  return (
    <AdminLayout>
      <SEO title="Admin" />
      {authenticated && <PortofolioManagement />}
    </AdminLayout>
  );
};

export default AdminPage;
