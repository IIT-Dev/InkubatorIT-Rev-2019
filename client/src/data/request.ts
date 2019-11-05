export const questions = [
  {
    label: 'Siapa nama Anda?',
    id: 'name',
    type: 'text',
    defaultValue: '',
  },
  {
    label: 'Dari instansi mana Anda berasal?',
    id: 'instance',
    type: 'text',
    defaultValue: '',
  },
  {
    label: 'Apa Anda seorang mahasiswa?',
    id: 'isStudent',
    type: 'radio',
    options: ['Ya', 'Tidak'],
    defaultValue: undefined,
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
  },
  {
    label: 'Apa nomor WhatsApp Anda?',
    id: 'whatsapp',
    type: 'text',
    defaultValue: '',
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
  },
  {
    label: 'Deskripsi proyek',
    id: 'description',
    type: 'textarea',
    defaultValue: '',
  },
  {
    label: 'Berapa ekspektasi biaya Anda untuk proyek ini?',
    id: 'expectation',
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
  },
  {
    label: 'Catatan untuk proyek ini',
    id: 'description',
    type: 'textarea',
    defaultValue: '',
  },
  {
    label: 'Apa Anda memiliki pertanyaan?',
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
