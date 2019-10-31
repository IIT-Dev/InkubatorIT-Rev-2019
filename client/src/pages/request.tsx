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
    label: 'Apa Anda seorang mahasiswa?',
    id: 'isStudent',
    type: 'radio',
    options: ['Ya', 'Tidak'],
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
  {
    label: 'Apa Anda sudah memiliki desain untuk proyek ini?',
    id: 'isDesignExist',
    type: 'radio',
    options: ['Sudah', 'Belum'],
  },
  {
    label: 'Catatan untuk proyek ini',
    id: 'description',
    type: 'textarea',
  },
  {
    label: 'Apa Anda memiliki pertanyaan?',
    id: 'question',
    type: 'textarea',
  },
];

const Request = () => {
  const InputField = props => {
    const { label, id, type, options, focus } = props;

    const getField = () => {
      switch (type) {
        case 'text':
          return <input type="text" id={id} placeholder="Ketik jawaban disini..." autoFocus={focus} />;
        case 'textarea':
          return <textarea id={id} placeholder="Ketik jawaban disini..." autoFocus={focus} rows={5} />;
        case 'radio': {
          return (
            <div className="options">
              {options.map((option, index) => (
                <button key={index}>{option}</button>
              ))}
            </div>
          );
        }
      }
    };

    const getButton = () => {
      if (type === 'radio') return;

      return (
        <div>
          <button>OK</button>
          <span>
            atau tekan <span className="enter">ENTER</span>
          </span>
        </div>
      );
    };

    return (
      <div className="question">
        <label htmlFor={id}>{label}</label>
        {getField()}
        {getButton()}
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
          <InputField key={index} {...question} focus={index === 0} />
        ))}
        <div className="submit-btn">
          <button>SUBMIT</button>
        </div>
      </section>
    </Layout>
  );
};

export default Request;
