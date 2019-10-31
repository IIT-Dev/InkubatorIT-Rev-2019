import React from 'react';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const questions = [
  {
    label: 'Siapa nama Anda?',
    id: 'name',
    type: 'text',
  },
  {
    label: 'Dari instansi mana Anda berasal?',
    id: 'instance',
    type: 'text',
  },
  {
    label: 'Apa jurusan Anda?',
    id: 'major',
    type: 'text',
  },
  {
    label: 'Anda angkatan berapa?',
    id: 'classOf',
    type: 'text',
  },
  {
    label: 'Apa nomor WhatsApp Anda?',
    id: 'whatsapp',
    type: 'text',
  },
  {
    label: 'Apa ID Line Anda?',
    id: 'line',
    type: 'text',
  },
  {
    label: 'Deskripsi proyek',
    id: 'description',
    type: 'textarea',
  },
  {
    label: 'Berapa ekspektasi biaya Anda untuk proyek ini?',
    id: 'expectation',
    type: 'text',
  },
];

const Request = () => {
  const InputField = props => {
    const { label, id, type } = props;

    const getField = () => {
      switch (type) {
        case 'text':
          return <input type="text" id={id} placeholder="Ketik jawaban disini..." autoFocus />;
        case 'textarea':
          return <textarea id={id} placeholder="Ketik jawaban disini..." autoFocus rows={5} />;
      }
    };

    return (
      <div className="question">
        <label htmlFor={id}>{label}</label>
        {getField()}
        <div>
          <button>OK</button>
          <span>
            atau tekan <span className="enter">ENTER</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <SEO title="Request a Project" />
      <section className="request">
        <h1 className="title">
          <span>Formulir Pengajuan Proyek</span>
        </h1>
        {questions.map((question, index) => (
          <InputField key={index} {...question} />
        ))}
      </section>
    </Layout>
  );
};

export default Request;
