import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './scss/404.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="page-not-found">
      <h1 className="h1_title">Halaman Tidak Ditemukan</h1>
      <Link to="/">
        <button className="btn_back-to-home">Kembali Ke Beranda</button>
      </Link>
    </section>
  </Layout>
);

export default NotFoundPage;
