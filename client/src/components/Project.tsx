import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './scss/Project.scss';

const Alert = withReactContent(Swal);

export const Project = props => {
  const { title, platform, imageUrl, description, admin } = props;

  const actionOpenAlert = () => {
    Alert.fire({
      title: <p>{title}</p>,
      html: (
        <div className="project-modal">
          <p>{description}</p>
          <button>{platform.toUpperCase()}</button>
          <div className="img">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      ),
      confirmButtonColor: 'var(--tertiary)',
    });
  };

  const renderIcon = type => {
    switch (type) {
      case 'web':
        return faChrome;
      case 'desktop':
        return faDesktop;
      case 'mobile':
        return faMobileAlt;
    }
  };

  const renderAdminButton = () => {
    if (!admin) return;

    return (
      <div className="buttons">
        <button className="btn edit-btn">
          <FontAwesomeIcon icon={faEdit} color="var(--secondary)" />
        </button>
        <button className="btn remove-btn">
          <FontAwesomeIcon icon={faTrash} color="var(--quartenary)" />
        </button>
      </div>
    );
  };

  return (
    <div className="project" onClick={actionOpenAlert}>
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title">
        <h3>{title}</h3>
        <div>
          <FontAwesomeIcon icon={renderIcon(platform)} className="icon" />
        </div>
      </div>
      {renderAdminButton()}
    </div>
  );
};
