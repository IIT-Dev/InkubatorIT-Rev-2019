import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

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
    label: 'Apa alamat email Anda?',
    id: 'email',
    type: 'email',
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
    label: 'Jenis Proyek',
    id: 'type',
    type: 'radio',
    options: ['Website', 'Aplikasi Android', 'Aplikasi iOS', 'Game', 'Prototype', 'Mockup'],
  },
  {
    label: 'Tujuan pembuatan proyek',
    id: 'motive',
    type: 'radio',
    options: [
      'Menyelesaikan Tugas Kuliah',
      'Menyelesaikan Skripsi',
      'Menyelesaikan Thesis',
      'Membuat Startup',
      'Memenuhi keperluan perusahaan',
      'Memenuhi keperluan acara, misalnya lomba',
    ],
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
    label: 'Kapan deadline Anda untuk proyek ini?',
    id: 'deadline',
    type: 'date',
  },
  {
    label: 'Apa Anda sudah memiliki desain untuk proyek ini?',
    id: 'isDesignExist',
    type: 'radio',
    options: [
      'Sudah',
      'Belum, namun akan dibuat segera dari pihak client sepenuhnya',
      'Belum dan membutuhkan bantuan berunding dengan pihak pembuat proyek',
      'Belum dan dibebaskan kepada pihak pembuat proyek',
    ],
  },
  {
    label: 'Dalam bentuk apa desain yang Anda miliki?',
    id: 'design',
    type: 'radio',
    options: [
      'Mockup Digital (marvelapp, balsamiq, dsb.)',
      'File Gambar Digital (Photoshop, Ai, Sketch, dsb.)',
      'Design manual di kertas',
    ],
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

const notices = [
  'Pertimbangkan deadline & biaya dengan kompleksitas proyek. Proyek yang kami prioritaskan adalah proyek dengan deadline & biaya yang sesuai dengan kompleksitas proyek',
  'Proyek yang sudah memiliki rancangan tampilan & desain akan dapat diproses dengan lebih cepat.',
];

const Request = () => {
  const InputField = props => {
    const { label, id, type, options, focus } = props;

    const getField = () => {
      switch (type) {
        case 'text':
          return (
            <input
              type="text"
              id={id}
              name={id}
              placeholder="Ketik jawaban disini..."
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'textarea':
          return (
            <textarea
              id={id}
              name={id}
              placeholder="Ketik jawaban disini..."
              autoFocus={focus}
              rows={5}
              autoComplete="off"
            />
          );
        case 'date':
          return (
            <MaskedInput
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              id={id}
              name={id}
              placeholder="dd/mm/yyyy"
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'email':
          return (
            <MaskedInput
              mask={emailMask}
              type="text"
              id={id}
              name={id}
              placeholder="example@gmail.com"
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'radio': {
          return (
            <div className={`options ${options.length > 2 && 'multiline'}`}>
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
          <button type="button">OK</button>
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
      <form className="request" autoComplete="off" autoCorrect="off">
        <div className="title">
          <span>Formulir Pengajuan Proyek</span>
          {notices.map((notice, index) => (
            <h3 key={index}>{notice}</h3>
          ))}
        </div>
        {questions.map((question, index) => (
          <InputField key={index} {...question} focus={index === 0} />
        ))}
        <div className="submit-btn">
          <button>SUBMIT</button>
        </div>
      </form>
    </Layout>
  );
};

export default Request;
