import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Typed from 'typed.js';

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
          Badan usaha khusus dibawah naungan <span>HMIF ITB</span> yang melayani pembuatan berbagai produk berbasis IT
          dan telah melayani puluhan klien selama 7 tahun lebih.
        </p>
        <Link to="/about">
          <button>Lebih Lanjut</button>
        </Link>
      </div>
    </div>
  );

  useEffect(() => {
    const typed = new Typed('.projects', {
      strings: ['Web', 'Mobile', 'Desktop'],
      typeSpeed: 70,
      backSpeed: 40,
      startDelay: 2000,
      backDelay: 1000,
      loop: true,
      smartBackspace: true, // Default value
    });

    return () => typed.destroy();
  });

  const renderWorks = () => {
    return (
      <div className="works">
        <div className="works-wrapper">
          <h1>
            Kami Melayani Pembuatan Aplikasi Berbasis <span className="projects"></span>
          </h1>
          <Link to="/portofolio">
            <button>Lihat Portofolio Kami</button>
          </Link>
        </div>
      </div>
    );
  };

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
