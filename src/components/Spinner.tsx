import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import './scss/Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <SyncLoader color="var(--primary)" />
    </div>
  );
}

export default Spinner;
