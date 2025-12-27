export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  year: string;
  duration: string;
  role: string;
  link?: string;
  repository?: string;
  liveDemo?: string;
  mockups: string[];
  features: string[];
  challenges?: string;
  solutions?: string;
}

export const projects: Project[] = [
  {
    id: 'naga-cargo-indonesia',
    title: 'Naga Cargo Indonesia Delivery System',
    description: 'Sistem aplikasi mobile dan dashboard web untuk monitoring pengiriman dan bukti foto kurir di seluruh Indonesia untuk Naga Cargo Indonesia (JNE Cargo).',
    longDescription: 'Project pihak ketiga bersama Naga Cargo Indonesia (JNE Cargo) sebagai Fullstack Developer. Saya membangun aplikasi mobile (Flutter/Dart) yang digunakan kurir untuk mengunggah bukti foto pengiriman di seluruh Indonesia sesuai wilayah tugas. Aplikasi ini hanya dapat digunakan di wilayah yang ditentukan, sudah mendukung kompresi gambar agar ukuran file kecil namun tetap jelas, serta dapat digunakan secara offline (tanpa jaringan). Selain itu, saya juga membangun website dashboard (Laravel Blade) untuk monitoring aktivitas kurir dan data PIC. Sistem ini menggunakan API untuk integrasi antara aplikasi dan website, memastikan proses pengiriman dan monitoring berjalan efisien dan real-time.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'Blade', 'REST API', 'MySQL'],
    category: 'Logistics & Delivery',
    year: '2025',
    duration: '6 bulan',
    role: 'Fullstack Developer',
    link: '#',
    repository: undefined,
    liveDemo: 'https://monitoringweb.decoratics.id/',
    mockups: [
      '/portofolio/naga_cargo/porto1.webp',
      '/portofolio/naga_cargo/porto2.webp',
      '/portofolio/naga_cargo/porto3.webp',
      '/portofolio/naga_cargo/porto4.webp'
    ],
    features: [
      'Aplikasi mobile untuk kurir upload bukti foto pengiriman',
      'Dashboard web monitoring aktivitas kurir & data PIC',
      'Integrasi API antara aplikasi dan website',
      'Tracking pengiriman secara real-time',
      'Manajemen wilayah tugas kurir (aplikasi hanya aktif di wilayah tertentu)',
      'Kompresi gambar otomatis agar file kecil dan tetap jelas',
      'Dukungan offline mode (tanpa jaringan)',
      'Notifikasi status pengiriman',
      'Laporan dan rekap data pengiriman'
    ],
    challenges: 'Mengelola upload bukti foto dari banyak kurir di berbagai wilayah secara real-time, memastikan aplikasi hanya aktif di wilayah tugas, kompresi gambar efisien, dan sinkronisasi data saat offline.',
    solutions: 'Menerapkan REST API terpusat, sistem autentikasi aman, validasi lokasi wilayah, kompresi gambar di sisi aplikasi, serta sinkronisasi data otomatis saat jaringan tersedia. Dashboard monitoring untuk memastikan transparansi proses pengiriman.'
  },
  {
    id: 'berbinar-insightful-indonesia',
    title: 'Berbinar Insightful Indonesia',
    description: 'Website utama dan ekosistem digital untuk perusahaan psikologi Berbinar Insightful Indonesia, meliputi pemasaran, data staff, e-learning, dan layanan psikolog.',
    longDescription: 'Saya berperan sebagai Backend Developer dalam pengembangan ekosistem digital Berbinar Insightful Indonesia, sebuah perusahaan psikologi. Proyek ini meliputi pembuatan website bisnis utama (main repositories) untuk pemasaran, website staff untuk pengelolaan data karyawan, BerbinarPlus untuk e-learning, serta website layanan psikolog. Pengembangan backend menggunakan Laravel dan menerapkan CI/CD dengan GitHub Workflow, deployment menggunakan Termius, serta layanan hosting. Sistem ini dirancang untuk mendukung kebutuhan bisnis, edukasi, dan layanan psikologi secara terintegrasi dan efisien.',
    technologies: ['Laravel', 'PHP', 'CI/CD', 'GitHub Workflow', 'Termius', 'Hosting'],
    category: 'Psychology & Business',
    year: '2024',
    duration: '6 bulan',
    role: 'Backend Developer',
    link: '#',
    repository: undefined,
    liveDemo: 'https://berbinar.in/',
    mockups: [
      '/portofolio/berbinar/porto4.webp',
      '/portofolio/berbinar/porto2.webp',
      '/portofolio/berbinar/porto3.webp'
    ],
    features: [
      'Website utama pemasaran perusahaan psikologi',
      'Website staff untuk manajemen data karyawan',
      'BerbinarPlus untuk e-learning',
      'Website layanan psikolog',
      'Integrasi multi-platform',
      'CI/CD dengan GitHub Workflow',
      'Deployment otomatis via Termius',
      'Manajemen user dan autentikasi',
      'Dashboard administrasi',
      'Layanan hosting'
    ],
    challenges: 'Membangun ekosistem digital terintegrasi untuk berbagai kebutuhan (bisnis, staff, e-learning, layanan psikolog) dengan keamanan dan efisiensi tinggi.',
    solutions: 'Menggunakan Laravel untuk backend yang modular, CI/CD GitHub Workflow untuk deployment otomatis, serta Termius dan layanan hosting untuk pengelolaan server yang efisien dan aman.'
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
