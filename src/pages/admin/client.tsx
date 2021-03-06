import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby';

import '../scss/admin/client.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';
import { Client } from '../../components/Client';
import Spinner from '../../components/Spinner';
import { Alert } from '../../components/Alert';

import { useClients } from '../../hooks/useClients';
import { isAuthenticated } from '../../helpers/auth';
import { IClient } from '../../interfaces/client';

export const ClientForm: React.FC<{ client?: IClient }> = props => {
  const { client } = props;
  const [image, setImage] = useState(null);

  const defaultValue: IClient = {
    name: (client && client.name) || '',
    imageUrl: (client && client.imageUrl) || null,
  };

  const actionSelectClientImage = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    return <div className="img">{imgSrc && <img id="image" src={imgSrc} alt="Nama klien" />}</div>;
  };

  return (
    <div className="add-client-form">
      <input type="text" id="name" placeholder="Nama klien" defaultValue={defaultValue.name} />
      {renderImage()}
      <div className="upload-img">
        <label htmlFor="new-client-image">
          <img src={require('../../images/upload-photo.png')} alt="Upload button" />
        </label>
        <input type="file" name="image" id="new-client-image" accept="image/*" onChange={actionSelectClientImage} />
      </div>
    </div>
  );
};

const ClientManagement = () => {
  const { clients, addNewClient, editSelectedClient, deleteSelectedClient } = useClients();
  const [loading, setLoading] = useState(false);

  const actionOpenAddClientAlert = async () => {
    const alert = await Alert.fire({
      title: 'Tambah Client',
      html: <ClientForm />,
      showCancelButton: true,
      confirmButtonColor: 'var(--tertiary)',
      confirmButtonText: 'Tambahkan',
      preConfirm: () => {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const imageInput = document.getElementById('image') as HTMLImageElement;

        return {
          name: nameInput.value,
          imageUrl: imageInput.src,
        };
      },
    });

    if (alert.value) {
      setLoading(true);
      try {
        await addNewClient(alert.value);
        setLoading(false);
        Alert.fire('Sukses!', 'Client berhasil ditambahkan', 'success');
      } catch (e) {
        setLoading(false);
        Alert.fire('Ada kesalahan', e.message, 'error');
      }
    }
  };

  const actionOpenEditClientAlert = async (index: number) => {
    const alert = await Alert.fire({
      title: 'Edit Client',
      html: <ClientForm client={clients[index]} />,
      showCancelButton: true,
      confirmButtonColor: 'var(--tertiary)',
      confirmButtonText: 'Update',
      preConfirm: () => {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const imageInput = document.getElementById('image') as HTMLImageElement;

        return {
          name: nameInput.value,
          imageUrl: imageInput.src,
        };
      },
    });

    if (alert.value) {
      setLoading(true);
      try {
        await editSelectedClient({ ...clients[index], ...alert.value });
        setLoading(false);
        Alert.fire('Sukses!', 'Client berhasil diubah', 'success');
      } catch (e) {
        setLoading(false);
        Alert.fire('Ada kesalahan', e.message, 'error');
      }
    }
  };

  const actionDeleteClient = async (_id: string) => {
    setLoading(true);
    try {
      await deleteSelectedClient(_id);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Alert.fire('Ada kesalahan', e.message, 'error');
    }
  };

  const renderContent = () => {
    if (clients === null) {
      return <Spinner />;
    }
    if (clients.length === 0) {
      return <p className="notice">Kamu belum nambahin klien</p>;
    }
    return clients.map((client, index) => (
      <Client
        {...client}
        admin
        key={index}
        editClient={() => actionOpenEditClientAlert(index)}
        removeClient={(_id: string) => actionDeleteClient(_id)}
      />
    ));
  };

  return (
    <div className="client-management">
      <h1>
        <span>Client</span>
      </h1>
      <div className="projects">
        {renderContent()}
        <button
          className="add-client-btn"
          data-tip="Tambah client"
          data-for="client-add"
          onClick={actionOpenAddClientAlert}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </button>
        <ReactTooltip place="left" type="dark" effect="solid" id="client-add" />
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
      {authenticated && <ClientManagement />}
    </AdminLayout>
  );
};

export default AdminPage;
