import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './scss/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <div className="header">
        <div className="header_wrapper">
          <p className="p_welcome">Selamat Datang di</p>
          <h1>Inkubator IT</h1>
          <p className="p_short-desc">
            Sebuah badan khusus dibawah <span>HMIF ITB</span> yang melayani pembuatan berbagai macam produk berbasis IT
            dan telah melayani puluhan klien selama <span>7 tahun</span> lebih.
          </p>
          <button>Lebih Lanjut</button>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
