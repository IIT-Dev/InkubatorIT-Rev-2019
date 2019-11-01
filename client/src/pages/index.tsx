import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Typed from 'typed.js';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './scss/index.scss';

const IndexPage = () => {
  const header = (
    <div className="header">
      <div className="header_wrapper">
        <p className="p_welcome">Selamat Datang di</p>
        <h1>Inkubator IT</h1>
        <p className="p_short-desc">
          Badan usaha khusus dibawah naungan <span>HMIF ITB</span> yang melayani pembuatan berbagai produk berbasis IT
          dan telah melayani puluhan klien selama 7 tahun lebih.
        </p>
        <Link to="/request">
          <button>Request Proyek</button>
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

  const promotes = (
    <div className="promotes">
      <div className="promotes-wrapper left">
        <h1>Kami Melayani Pembuatan</h1>
        <h1>
          Aplikasi Berbasis <span className="projects"></span>
        </h1>
        <Link to="/portofolio">
          <button>Lihat Portofolio</button>
        </Link>
      </div>
      <div className="promotes-wrapper right">
        <h1>Kami Menerima Permintaan dari</h1>
        <h1>
          <span className="highlight">Dalam</span> dan <span className="highlight">Luar</span> Kampus ITB
        </h1>
        <Link to="/about">
          <button>Tentang Kami</button>
        </Link>
      </div>
    </div>
  );

  const timeline = (
    <div className="timeline">
      <div className="offer">
        <h2>Tertarik menggunakan jasa kami?</h2>
        <Link to="/request">
          <button>Request Disini</button>
        </Link>
      </div>
    </div>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home">
        {header}
        {promotes}
        {timeline}
      </section>
    </Layout>
  );
};

export default IndexPage;
