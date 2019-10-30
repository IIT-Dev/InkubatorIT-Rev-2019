import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './scss/index.scss';

const IndexPage = () => {
  const renderHeader = () => (
    <div className="header">
      <div className="header_wrapper">
        <p className="p_welcome">Selamat Datang di</p>
        <h1>Inkubator IT</h1>
        <p className="p_short-desc">
          Badan usaha khusus dibawah <span>HMIF ITB</span> yang melayani pembuatan berbagai macam produk berbasis IT dan
          telah melayani puluhan klien selama 7 tahun lebih.
        </p>
        <Link to="/about">
          <button>Lebih Lanjut</button>
        </Link>
      </div>
    </div>
  );

  const renderWorks = () => (
    <div className="works">
      <div className="works-wrapper">
        <h1>We Create...</h1>
        <Link to="/portfolio">
          <button>See Our Portfolio</button>
        </Link>
      </div>
    </div>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home">
        {renderHeader()}
        {renderWorks()}
      </section>
    </Layout>
  );
};

export default IndexPage;
