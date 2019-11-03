export const questions = [
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

export const notices = [
  'Pertimbangkan deadline & biaya dengan kompleksitas proyek. Proyek yang kami prioritaskan adalah proyek dengan deadline & biaya yang sesuai dengan kompleksitas proyek',
  'Proyek yang sudah memiliki rancangan tampilan & desain akan dapat diproses dengan lebih cepat.',
];
