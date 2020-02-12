export const questions = [
  {
    label: 'Siapa nama Anda?',
    id: 'name',
    type: 'text',
    defaultValue: '',
    isRequired: true,
  },
  {
    label: 'Dari instansi mana Anda berasal?',
    id: 'instance',
    type: 'text',
    defaultValue: '',
    isRequired: true,
  },
  {
    label: 'Apa Anda seorang mahasiswa ITB?',
    id: 'isStudent',
    type: 'radio',
    options: ['Ya', 'Tidak'],
    defaultValue: undefined,
    isRequired: true,
  },
  {
    label: 'Apa jurusan Anda?',
    id: 'major',
    type: 'text',
    defaultValue: '',
    condition: {
      isStudent: 'Ya',
    },
  },
  {
    label: 'Anda angkatan berapa?',
    id: 'classOf',
    type: 'text',
    defaultValue: '',
    condition: {
      isStudent: 'Ya',
    },
  },
  {
    label: 'Apa alamat email Anda?',
    id: 'email',
    type: 'email',
    defaultValue: '',
    isRequired: true,
  },
  {
    label: 'Apa nomor WhatsApp Anda?',
    id: 'whatsapp',
    type: 'text',
    defaultValue: '',
    isRequired: true,
  },
  {
    label: 'Apa ID Line Anda?',
    id: 'line',
    type: 'text',
    defaultValue: '',
  },
  {
    label: 'Jenis Proyek',
    id: 'type',
    type: 'checkbox',
    options: ['Website', 'Aplikasi Android', 'Aplikasi iOS', 'Game', 'Prototype', 'Mockup'],
    hasCustomInput: true,
    defaultValue: undefined,
    isRequired: true,
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
    hasCustomInput: true,
    defaultValue: undefined,
    isRequired: true,
  },
  {
    label: 'Deskripsi proyek',
    id: 'description',
    type: 'textarea',
    defaultValue: '',
    isRequired: true,
  },
  {
    label: 'Berapa ekspektasi biaya Anda untuk proyek ini?',
    id: 'fee',
    type: 'text',
    defaultValue: '',
  },
  {
    label: 'Kapan deadline Anda untuk proyek ini?',
    id: 'deadline',
    type: 'date',
    defaultValue: '',
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
    defaultValue: undefined,
    isRequired: true,
  },
  {
    label: 'Dalam bentuk apa desain yang Anda miliki?',
    id: 'design',
    type: 'checkbox',
    options: [
      'Mockup Digital (marvelapp, balsamiq, dsb.)',
      'File Gambar Digital (Photoshop, Ai, Sketch, dsb.)',
      'Design manual di kertas',
    ],
    hasCustomInput: true,
    defaultValue: undefined,
    condition: {
      isDesignExist: 'Sudah',
    },
    isRequired: true,
  },
  {
    label: 'Catatan untuk proyek ini',
    id: 'notes',
    type: 'textarea',
    defaultValue: '',
  },
  {
    label: 'Ada yang ingin Anda tanyakan?',
    id: 'question',
    type: 'textarea',
    defaultValue: '',
  },
];

export const notices = [
  'Pertimbangkan deadline & biaya dengan kompleksitas proyek.',
  'Proyek yang kami prioritaskan adalah proyek dengan deadline & biaya yang sesuai dengan kompleksitas proyek',
  'Proyek yang sudah memiliki rancangan tampilan & desain akan dapat diproses dengan lebih cepat.',
];

export const contacts = [
  'Wildan - Head of Incubator IT (line : Gonano | Whatsapp : 081572558786 )',
  'Albert - Head of Marketing (line : albertsahala | Whatsapp : 081381179559)',
  'Cornelius - Head of Project Management (line : corneliusyan | Whatsapp : 089654108308)',
];
