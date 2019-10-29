import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './scss/404.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="page-not-found">
      <h1 className="h1_title">Halaman Tidak Ditemukan</h1>
      <button className="btn_back-to-home">Kembali Ke Beranda</button>
    </section>
  </Layout>
);

export default NotFoundPage;
