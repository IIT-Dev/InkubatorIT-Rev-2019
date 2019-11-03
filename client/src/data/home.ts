import { faHandshake, faUserFriends, faUserSecret, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';

export const timelines = [
  {
    title: 'Diskusi dengan Klien',
    description: 'Tatap muka langsung antara manajer proyek dengan klien untuk diskusi seputar proyek yang diajukan',
    icon: faUserFriends,
    iconSize: '1.25em',
  },
  {
    title: 'Evaluasi Kelayakan Proyek',
    description: 'Akan dipertimbangkan apakah proyek tersebut akan diterima atau tidak',
    icon: faSearch,
    iconSize: '1.25em',
  },
  {
    title: 'Mencari Developer',
    description: 'Mencari developer yang akan mengerjakan dan merupakan mahasiswa HMIF ITB',
    icon: faUserSecret,
    iconSize: '1.75em',
  },
  {
    title: 'Pengesahan MoU',
    description: 'Penandatanganan spesifikasi proyek final dari klien',
    icon: faHandshake,
    iconSize: '1.25em',
  },
  {
    title: 'Pengerjaan Proyek',
    description: 'Proyek dikerjakan oleh developer handal dan dikontrol oleh manajer proyek',
    icon: faHandshake,
    iconSize: '1.125em',
  },
  {
    title: 'Selesai',
    description: 'Proyek selesai dikerjakan dan diserahkan kemudian penandatanganan selesai kontrak',
    icon: faCheck,
    iconSize: '1.5em',
    isHighlighted: true,
  },
];
