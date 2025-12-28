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
    year: '2025',
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
  {
    id: 'kopi-kelana',
    title: 'Kopi Kelana - Coffee Shop App',
    description: 'Aplikasi mobile coffee shop dengan fitur pemesanan kopi, janjian ngopi lintas waktu, konversi harga mata uang asing, rekomendasi menu, dan gamifikasi poin untuk voucher diskon.',
    longDescription: 'Sebagai Fullstack Developer, saya membangun aplikasi Kopi Kelana menggunakan Flutter untuk frontend dan Laravel sebagai backend API. Aplikasi ini memungkinkan pelanggan memesan kopi secara online, memilih menu spesial "Janjian Kopi" untuk menentukan waktu ngopi bersama lintas zona waktu, serta fitur konversi harga otomatis jika pelanggan menggunakan mata uang asing ke Rupiah. Sistem akan merekomendasikan menu sesuai harga setelah konversi. Selain itu, terdapat fitur gamifikasi: pelanggan mengumpulkan poin dari transaksi yang dapat ditukar dengan voucher diskon. Backend Laravel mengelola data menu, transaksi, user, konversi mata uang, dan sistem gamifikasi.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'REST API', 'MySQL'],
    category: 'Food & Beverage',
    year: '2024',
    duration: '5 bulan',
    role: 'Fullstack Developer',
    link: '#',
    repository: 'https://github.com/amrisabilly/aplikasi_coffee_shop.git',
    liveDemo: undefined,
    mockups: [
      '/portofolio/coffe/porto1.webp',
      '/portofolio/coffe/porto2.webp',
      '/portofolio/coffe/porto3.webp',
      '/portofolio/coffe/porto4.webp'
    ],
    features: [
      'Pemesanan kopi online via aplikasi',
      'Menu spesial "Janjian Kopi" untuk menentukan waktu ngopi lintas zona waktu',
      'Konversi harga otomatis dari mata uang asing ke Rupiah',
      'Rekomendasi menu sesuai harga setelah konversi',
      'Gamifikasi: pengumpulan poin dari transaksi',
      'Penukaran poin menjadi voucher diskon',
      'Manajemen menu, transaksi, dan user',
      'Integrasi API antara aplikasi dan backend',
      'Notifikasi status pesanan',
      'Dashboard admin untuk monitoring data'
    ],
    challenges: 'Membangun sistem konversi harga real-time, fitur janjian lintas waktu, dan gamifikasi yang terintegrasi dengan transaksi serta menjaga performa aplikasi.',
    solutions: 'Menggunakan API kurs mata uang untuk konversi real-time, logika penjadwalan waktu lintas zona, serta sistem gamifikasi terintegrasi di backend. Backend Laravel mengelola seluruh data dan logika bisnis.'
  },
  {
    id: 'hima-sistem-informasi',
    title: 'Website Himpunan Mahasiswa Sistem Informasi',
    description: 'Website komunitas Himpunan Mahasiswa Sistem Informasi dengan fitur Spotify, panduan mahasiswa, halaman penjualan, dan lainnya.',
    longDescription: 'Sebagai Frontend Developer, saya mengembangkan website komunitas untuk Himpunan Mahasiswa Sistem Informasi menggunakan Laravel Inertia. Website ini menyediakan berbagai fitur seperti integrasi Spotify untuk playlist komunitas, panduan mahasiswa baru, halaman penjualan merchandise, serta berbagai informasi kegiatan dan layanan himpunan. Pengembangan frontend menggunakan Inertia.js dan backend menggunakan MySQL untuk pengelolaan data. Website ini bertujuan untuk meningkatkan engagement anggota dan memudahkan akses informasi serta layanan secara digital.',
    technologies: ['Laravel', 'Inertia.js', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    category: 'Community & Education',
    year: '2024',
    duration: '4 bulan',
    role: 'Frontend Developer',
    link: '#',
    repository: undefined,
    liveDemo: undefined,
    mockups: [
      '/portofolio/hima/porto1.webp',
      '/portofolio/hima/porto2.webp',
      '/portofolio/hima/porto3.webp',
      '/portofolio/hima/porto4.webp',
      '/portofolio/hima/porto5.webp',
      '/portofolio/hima/porto6.webp',
      '/portofolio/hima/porto7.webp'
    ],
    features: [
      'Integrasi Spotify playlist komunitas',
      'Panduan mahasiswa baru',
      'Halaman penjualan merchandise',
      'Informasi kegiatan dan event himpunan',
      'Manajemen konten dinamis',
      'Dashboard admin untuk pengelolaan data',
      'Autentikasi anggota',
      'Desain responsif dan modern'
    ],
    challenges: 'Mengintegrasikan fitur Spotify, membangun sistem manajemen konten yang mudah digunakan, dan memastikan website tetap responsif serta mudah diakses oleh seluruh anggota.',
    solutions: 'Menggunakan Laravel Inertia untuk frontend yang interaktif, integrasi API Spotify, serta desain UI/UX yang ramah pengguna dan mobile-friendly.'
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
