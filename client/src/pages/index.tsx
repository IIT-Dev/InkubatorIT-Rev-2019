import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import './scss/index.scss';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import { timelines } from '../data/home';

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

  const renderTimeLineElements = () => {
    /* First element not included in data because we have a component in description */
    const registerElements = (
      <VerticalTimelineElement
        visibilitySensorProps={{ offset: { bottom: 200 } }}
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
    );

    return (
      <>
        {registerElements}
        {timelines.map((timeline, index) => {
          let contentStyle: React.CSSProperties = {
            borderTop: '5px solid var(--tertiary)',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
          };
          let iconStyle: React.CSSProperties = {
            background: 'var(--tertiary)',
            color: '#fff',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
          };
          let contentArrowStyle: React.CSSProperties = {};

          if (timeline.isHighlighted) {
            contentStyle = {
              background: 'var(--secondary)',
              color: '#fff',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
            };

            iconStyle = {
              background: 'var(--secondary)',
              color: '#fff',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.25)',
            };

            contentArrowStyle = { borderRight: '7px solid  var(--secondary)' };
          }

          return (
            <VerticalTimelineElement
              key={index}
              visibilitySensorProps={{ offset: { bottom: 200 } }}
              contentStyle={contentStyle}
              iconStyle={iconStyle}
              contentArrowStyle={contentArrowStyle}
              icon={<FontAwesomeIcon icon={timeline.icon} style={{ fontSize: timeline.iconSize }} />}
            >
              <h3 className="vertical-timeline-element-title">{timeline.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: timeline.description }}></p>
            </VerticalTimelineElement>
          );
        })}
      </>
    );
  };

  const timeline = (
    <div className="timeline">
      <h2>Bagaimana cara kerjanya?</h2>
      <VerticalTimeline>{renderTimeLineElements()}</VerticalTimeline>
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
