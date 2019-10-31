import React from 'react';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Request = () => {
  return (
    <Layout>
      <SEO title="Request a Project" />
      <section className="request">
        <h1 className="title">
          <span>Formulir Pengajuan Proyek</span>
        </h1>
      </section>
    </Layout>
  );
};

export default Request;
