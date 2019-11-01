import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faCheck,
  faHandshake,
  faFileAlt,
  faUserFriends,
  faUserSecret,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
      <h2>Bagaimana cara kerjanya?</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'var(--secondary)',
            color: '#fff',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
          }}
          contentArrowStyle={{ borderRight: '7px solid  var(--secondary)' }}
          iconStyle={{ background: 'var(--secondary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.75em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Mengisi Form Pengajuan Proyek</h3>
          <p>
            Pengisian dilakukan di{' '}
            <Link to="/request" className="link">
              laman ini
            </Link>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: '5px solid var(--tertiary)', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          iconStyle={{ background: 'var(--tertiary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faUserFriends} style={{ fontSize: '1.25em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Diskusi dengan Klien</h3>
          <p>Tatap muka langsung antara manajer proyek dengan klien untuk diskusi seputar proyek yang diajukan</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: '5px solid var(--tertiary)', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          iconStyle={{ background: 'var(--tertiary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.25em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Evaluasi Kelayakan Proyek</h3>
          <p>Akan dipertimbangkan apakah proyek tersebut akan diterima atau tidak</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: '5px solid var(--tertiary)', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          iconStyle={{ background: 'var(--tertiary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faUserSecret} style={{ fontSize: '1.75em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Mencari Developer</h3>
          <p>Mencari developer yang akan mengerjakan dan merupakan mahasiswa HMIF ITB</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ borderTop: '5px solid var(--tertiary)', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          iconStyle={{ background: 'var(--tertiary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faHandshake} style={{ fontSize: '1.25em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Pengesahan MoU</h3>
          <p>Penandatanganan spesifikasi proyek final dari klient</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ borderTop: '5px solid var(--tertiary)', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          iconStyle={{ background: 'var(--tertiary)', color: '#fff', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)' }}
          icon={<FontAwesomeIcon icon={faLaptop} style={{ fontSize: '1.125em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Pengerjaan Proyek</h3>
          <p>Proyek dikerjakan oleh developer handal dan dikontrol oleh manajer proyek</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'var(--secondary)',
            color: '#fff',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
          }}
          iconStyle={{
            background: 'var(--secondary)',
            color: '#fff',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
          }}
          icon={<FontAwesomeIcon icon={faCheck} style={{ fontSize: '1.5em' }} />}
        >
          <h3 className="vertical-timeline-element-title">Selesai</h3>
          <p>Proyek selesai dikerjakan dan diserahkan kemudian penandatanganan selesai kontrak</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );

  const offer = (
    <div className="offer">
      <h2>Tertarik menggunakan jasa kami?</h2>
      <Link to="/request">
        <button>Request Disini</button>
      </Link>
    </div>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home">
        {header}
        {promotes}
        {timeline}
        {offer}
      </section>
    </Layout>
  );
};

export default IndexPage;
