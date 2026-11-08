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

type ProjectCopy = Pick<
  Project,
  'title' | 'description' | 'longDescription' | 'category' | 'duration' | 'role' | 'features' | 'challenges' | 'solutions'
>;

export const projects: Project[] = [
  {
    id: 'naga-cargo-indonesia',
    title: 'Naga Cargo Indonesia Delivery System',
    description: 'A mobile application and web dashboard system for monitoring deliveries and courier photo proof across Indonesia for Naga Cargo Indonesia (JNE Cargo).',
    longDescription: 'A third-party project with Naga Cargo Indonesia (JNE Cargo) as a Fullstack Developer. I developed a mobile application (Flutter/Dart) used by couriers to upload delivery photo proof throughout Indonesia according to their assigned regions. The app is only accessible in designated areas, supports image compression for small yet clear files, and can be used offline (without network). Additionally, I built a dashboard website (Laravel) for monitoring courier activities and PIC data. The system uses APIs to integrate the app and website, ensuring efficient and real-time delivery and monitoring processes.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'REST API', 'MySQL'],
    category: 'Logistics & Delivery',
    year: '2025',
    duration: '6 months',
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
      'Mobile app for couriers to upload delivery photo proof',
      'Web dashboard for monitoring courier activities & PIC data',
      'API integration between app and website',
      'Real-time delivery tracking',
      'Courier region management (app only active in certain areas)',
      'Automatic image compression for small and clear files',
      'Offline mode support (no network required)',
      'Delivery status notifications',
      'Delivery data reports and recaps'
    ],
    challenges: 'Managing photo uploads from many couriers in various regions in real-time, ensuring the app is only active in assigned areas, efficient image compression, and data synchronization when offline.',
    solutions: 'Implementing centralized REST API, secure authentication system, region location validation, in-app image compression, and automatic data synchronization when network is available. Dashboard monitoring ensures transparency in the delivery process.'
  },
  {
    id: 'berbinar-insightful-indonesia',
    title: 'Berbinar Insightful Indonesia',
    description: 'Main website and digital ecosystem for Berbinar Insightful Indonesia, a psychology company, covering marketing, staff data, e-learning, and psychologist services.',
    longDescription: 'I served as a Backend Developer in the development of the digital ecosystem for Berbinar Insightful Indonesia, a psychology company. This project included building the main business website (main repositories) for marketing, a staff website for employee data management, BerbinarPlus for e-learning, and a psychologist service website. The backend was developed using Laravel and implemented CI/CD with GitHub Workflow, deployment via Termius, and hosting services. The system is designed to support business, education, and psychology services needs in an integrated and efficient manner.',
    technologies: ['Laravel', 'PHP', 'CI/CD', 'GitHub Workflow', 'Termius', 'Hosting'],
    category: 'Psychology & Business',
    year: '2025',
    duration: '6 months',
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
      'Main website for psychology company marketing',
      'Staff website for employee data management',
      'BerbinarPlus for e-learning',
      'Psychologist service website',
      'Multi-platform integration',
      'CI/CD with GitHub Workflow',
      'Automatic deployment via Termius',
      'User management and authentication',
      'Admin dashboard',
      'Hosting services'
    ],
    challenges: 'Building an integrated digital ecosystem for various needs (business, staff, e-learning, psychologist services) with high security and efficiency.',
    solutions: 'Using Laravel for a modular backend, CI/CD GitHub Workflow for automatic deployment, and Termius and hosting services for efficient and secure server management.'
  },
  {
    id: 'kopi-kelana',
    title: 'Kopi Kelana - Coffee Shop App',
    description: 'Mobile coffee shop app with coffee ordering, cross-timezone coffee meetups, foreign currency price conversion, menu recommendations, and point gamification for discount vouchers.',
    longDescription: 'As a Fullstack Developer, I built the Kopi Kelana app using Flutter for the frontend and Laravel as the backend API. The app allows customers to order coffee online, choose the special "Coffee Meetup" menu to schedule coffee sessions across time zones, and features automatic price conversion if customers use foreign currencies to Rupiah. The system recommends menus based on the converted price. There is also a gamification feature: customers collect points from transactions that can be exchanged for discount vouchers. The Laravel backend manages menu data, transactions, users, currency conversion, and the gamification system.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'REST API', 'MySQL'],
    category: 'Food & Beverage',
    year: '2025',
    duration: '2 months',
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
      'Online coffee ordering via app',
      'Special "Coffee Meetup" menu for scheduling across time zones',
      'Automatic price conversion from foreign currencies to Rupiah',
      'Menu recommendations based on converted price',
      'Gamification: collect points from transactions',
      'Redeem points for discount vouchers',
      'Menu, transaction, and user management',
      'API integration between app and backend',
      'Order status notifications',
      'Admin dashboard for data monitoring'
    ],
    challenges: 'Building a real-time price conversion system, cross-timezone meetup feature, and gamification integrated with transactions while maintaining app performance.',
    solutions: 'Using currency exchange rate APIs for real-time conversion, cross-timezone scheduling logic, and integrated gamification system in the backend. The Laravel backend manages all data and business logic.'
  },
  {
    id: 'hima-sistem-informasi',
    title: 'Information Systems Student Association Website',
    description: 'Community website for the Information Systems Student Association featuring Spotify integration, student guides, merchandise sales page, and more.',
    longDescription: 'As a Frontend Developer, I developed a community website for the Information Systems Student Association using Laravel Inertia. The website provides various features such as Spotify integration for community playlists, new student guides, merchandise sales page, and information on activities and association services. The frontend was developed using Inertia.js and the backend uses MySQL for data management. The website aims to increase member engagement and facilitate access to information and services digitally.',
    technologies: ['Laravel', 'Inertia.js', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    category: 'Community & Education',
    year: '2024',
    duration: '4 months',
    role: 'Frontend Developer',
    link: '#',
    repository: 'https://github.com/web-himasisfo/project-web-himasisfo.git',
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
      'Spotify playlist integration for the community',
      'New student guide',
      'Merchandise sales page',
      'Information on association activities and events',
      'Dynamic content management',
      'Admin dashboard for data management',
      'Member authentication',
      'Responsive and modern design'
    ],
    challenges: 'Integrating Spotify features, building an easy-to-use content management system, and ensuring the website remains responsive and accessible to all members.',
    solutions: 'Using Laravel Inertia for an interactive frontend, Spotify API integration, and user-friendly, mobile-friendly UI/UX design.'
  },
  {
    id: 'aplikasi-kriptografi',
    title: 'Cryptography App - Encryption & Decryption',
    description: 'Mobile cryptography app with encryption and decryption features using classical and modern methods, plus super encryption for layered security.',
    longDescription: 'A final project for the Cryptography course that I developed as a Mobile Developer using Flutter. This is a static app with a local database providing various cryptography methods for message encryption and decryption. There are two main categories: classical cryptography (Caesar Cipher and Playfair Cipher) and modern cryptography (Stream Cipher and Block Cipher). The app also supports a super encryption feature that combines several methods for layered security. It is designed to help users understand information security concepts and practical implementation of cryptographic algorithms.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Local Storage'],
    category: 'Security & Cryptography',
    year: '2025',
    duration: '1 month',
    role: 'Mobile Developer',
    link: '#',
    repository: 'https://github.com/amrisabilly/aplikasi_kriptografi.git',
    liveDemo: undefined,
    mockups: [
      '/portofolio/kripto1/porto1.webp',
      '/portofolio/kripto1/porto2.webp',
      '/portofolio/kripto1/porto3.webp',
      '/portofolio/kripto1/porto4.webp',
      '/portofolio/kripto1/porto5.webp'
    ],
    features: [
      'Encrypt and decrypt messages using Caesar Cipher',
      'Encrypt and decrypt using Playfair Cipher',
      'Stream Cipher implementation for modern cryptography',
      'Block Cipher implementation for modern cryptography',
      'Super Encryption: combination of several methods for layered security',
      'Local database to store encryption/decryption history',
      'Intuitive and easy-to-use interface',
      'Explanation of how each algorithm works',
      'Visualization of encryption and decryption processes',
      'Offline mode without internet connection'
    ],
    challenges: 'Implementing various cryptographic algorithms correctly and efficiently, building super encryption that combines classical and modern methods, and providing an interface that is easy to understand for technical concepts.',
    solutions: 'Conducting in-depth research on each cryptographic algorithm, implementing with rigorous testing to ensure accurate encryption/decryption results, using local SQLite database for optimal performance, and designing UI/UX that facilitates understanding of cryptography concepts.'
  },
  {
    id: 'cryptoguard-messaging',
    title: 'CryptoGuard - Secure Messaging App',
    description: 'End-to-end encrypted messaging app with public & private key, file encryption, and image steganography for maximum security.',
    longDescription: 'A final project for the Cryptography course that I developed as a Mobile Developer using Flutter, named CryptoGuard. This app is an end-to-end encrypted messaging system using public and private key concepts to ensure secure communication. Each user has a key pair (public and private key) for encrypting and decrypting messages. The app supports not only text encryption but also file encryption and steganography to hide secret messages in images. The system is designed to provide high-level communication security with asymmetric cryptography and information hiding techniques.',
    technologies: ['Flutter', 'Dart', 'RSA', 'AES', 'Steganography', 'SQLite', 'Local Storage'],
    category: 'Security & Cryptography',
    year: '2025',
    duration: '1 month',
    role: 'Mobile Developer',
    link: '#',
    repository: 'https://github.com/amrisabilly/kripografi_steganografi.git',
    liveDemo: undefined,
    mockups: [
      '/portofolio/kripto2/porto1.webp',
      '/portofolio/kripto2/porto2.webp',
      '/portofolio/kripto2/porto3.webp',
      '/portofolio/kripto2/porto4.webp'
    ],
    features: [
      'End-to-end encryption with public & private key (RSA)',
      'Key pair generation system for each user',
      'Real-time text message encryption and decryption',
      'File encryption for various formats',
      'Steganography: hiding secret messages in images',
      'Extracting hidden messages from images',
      'Secure cryptographic key management',
      'Local database for storing encrypted messages',
      'Secure and intuitive chat interface',
      'Message integrity verification',
      'Offline mode for maximum security'
    ],
    challenges: 'Implementing asymmetric cryptography (RSA) for secure end-to-end encryption, managing each user’s public and private key, implementing steganography without degrading image quality, and maintaining app performance when encrypting large files.',
    solutions: 'Using RSA algorithm for asymmetric encryption and AES for symmetric encryption on large files, implementing a secure key management system with encrypted private key storage, LSB (Least Significant Bit) algorithm for steganography, as well as compression and chunking for large files. Local SQLite database for offline data security.'
  },
  {
    id: 'pandawara-bersih-lingkungan',
    title: 'Pandawara - Website Bersih-Bersih Lingkungan',
    description: 'Website bertema bersih-bersih lingkungan (Pandawara) dengan fitur pelaporan, dokumentasi kegiatan, dashboard admin, dan sisi user, dibangun menggunakan PHP native dan MySQL.',
    longDescription: 'Saya mengembangkan website Pandawara yang berfokus pada kegiatan bersih-bersih lingkungan. Website ini memiliki dua sisi utama: user dan admin. Pengguna dapat melaporkan lokasi yang membutuhkan aksi bersih-bersih, mendokumentasikan kegiatan, serta melihat galeri dokumentasi aksi. Admin dapat memantau, memverifikasi, dan mengelola laporan serta dokumentasi yang masuk, serta mengelola data kegiatan dan relawan. Sistem dibangun menggunakan PHP native tanpa framework dan MySQL sebagai basis data. Fitur utama meliputi pelaporan lokasi, upload dokumentasi (foto/video), dashboard monitoring untuk admin, autentikasi user dan admin, serta notifikasi status laporan.',
    technologies: ['PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Environment & Community',
    year: '2024',
    duration: '2 bulan',
    role: 'Fullstack Developer',
    link: '#',
    repository: 'https://github.com/amrisabilly/project-pandawara.git',
    liveDemo: undefined,
    mockups: [
      '/portofolio/pandawara/porto1.webp',
      '/portofolio/pandawara/porto2.webp',
      '/portofolio/pandawara/porto3.webp',
      '/portofolio/pandawara/porto4.webp'
    ],
    features: [
      'Sisi user: pelaporan lokasi, upload dokumentasi kegiatan',
      'Sisi admin: verifikasi dan manajemen laporan/dokumentasi',
      'Dashboard monitoring untuk admin',
      'Galeri dokumentasi aksi bersih-bersih',
      'Autentikasi user dan admin',
      'Notifikasi status laporan',
      'Manajemen data kegiatan dan relawan',
      'Responsive design untuk berbagai perangkat'
    ],
    challenges: 'Membangun sistem pelaporan dan dokumentasi yang mudah digunakan, mengelola verifikasi data, serta memastikan keamanan dan kecepatan akses data.',
    solutions: 'Menggunakan query SQL yang efisien, validasi input dan file upload, serta dashboard monitoring untuk admin dan sistem notifikasi otomatis.'
  },
  {
    id: 'persewaan-konser',
    title: 'Website Persewaan Alat Konser',
    description: 'Website persewaan alat-alat konser dengan fitur admin dan user, memungkinkan pemesanan alat secara online, dibangun menggunakan PHP native dan MySQL.',
    longDescription: 'Saya mengembangkan website persewaan alat-alat konser yang memiliki dua sisi utama: admin dan user. Pengguna dapat melihat daftar alat konser yang tersedia, melakukan pemesanan alat secara online, dan mendapatkan konfirmasi otomatis. Admin dapat mengelola data alat, stok, jadwal peminjaman, serta memantau seluruh proses pemesanan. Sistem ini dibangun menggunakan PHP native tanpa framework dan menggunakan MySQL sebagai basis data. Fitur utama meliputi autentikasi user dan admin, manajemen alat konser, pemesanan alat, notifikasi email, serta dashboard monitoring untuk admin.',
    technologies: ['PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Event & Equipment Rental',
    year: '2024',
    duration: '3 bulan',
    role: 'Fullstack Developer',
    link: '#',
    repository: 'https://github.com/amrisabilly/Website-Aku_sewa.git',
    liveDemo: undefined,
    mockups: [
      '/portofolio/sewa/porto1.webp',
      '/portofolio/sewa/porto2.webp',
      '/portofolio/sewa/porto3.webp'
    ],
    features: [
      'Sisi user: lihat daftar alat konser, pemesanan alat online',
      'Sisi admin: kelola data alat, stok, jadwal peminjaman',
      'Autentikasi user dan admin',
      'Notifikasi email konfirmasi pemesanan',
      'Dashboard monitoring untuk admin',
      'Riwayat pemesanan dan manajemen alat',
      'Responsive design untuk berbagai perangkat'
    ],
    challenges: 'Membangun sistem pemesanan alat real-time tanpa framework, memastikan keamanan data user dan admin, serta mengelola notifikasi otomatis.',
    solutions: 'Menggunakan query SQL yang efisien, validasi input secara ketat, serta implementasi sistem notifikasi email otomatis dan dashboard monitoring.'
  },
];

export const projectTranslations: Record<string, { id: ProjectCopy }> = {
  'naga-cargo-indonesia': {
    id: {
      title: 'Sistem Pengiriman Naga Cargo Indonesia',
      description: 'Aplikasi mobile dan dashboard web untuk memantau pengiriman serta bukti foto kurir di seluruh Indonesia untuk Naga Cargo Indonesia (JNE Cargo).',
      longDescription: 'Proyek pihak ketiga bersama Naga Cargo Indonesia (JNE Cargo) sebagai Fullstack Developer. Saya mengembangkan aplikasi mobile (Flutter/Dart) yang digunakan kurir untuk mengunggah bukti foto pengiriman sesuai wilayah tugas. Aplikasi hanya dapat diakses di area tertentu, mendukung kompresi gambar, dan dapat digunakan secara offline. Saya juga membuat dashboard website (Laravel) untuk memantau aktivitas kurir dan data PIC. Sistem menggunakan API untuk mengintegrasikan aplikasi dan website sehingga proses pengiriman dan pemantauan berjalan efisien serta real-time.',
      category: 'Logistik & Pengiriman',
      duration: '6 bulan',
      role: 'Fullstack Developer',
      features: [
        'Aplikasi mobile untuk mengunggah bukti foto pengiriman',
        'Dashboard web untuk memantau aktivitas kurir dan data PIC',
        'Integrasi API antara aplikasi dan website',
        'Pelacakan pengiriman secara real-time',
        'Manajemen wilayah kurir',
        'Kompresi gambar otomatis',
        'Dukungan mode offline',
        'Notifikasi status pengiriman',
        'Laporan dan rekap data pengiriman'
      ],
      challenges: 'Mengelola unggahan foto dari banyak kurir di berbagai wilayah secara real-time, membatasi area akses aplikasi, mengoptimalkan kompresi gambar, dan menyinkronkan data saat offline.',
      solutions: 'Menerapkan REST API terpusat, autentikasi aman, validasi lokasi wilayah, kompresi gambar di aplikasi, dan sinkronisasi otomatis saat jaringan tersedia.'
    }
  },
  'berbinar-insightful-indonesia': {
    id: {
      title: 'Berbinar Insightful Indonesia',
      description: 'Website utama dan ekosistem digital untuk perusahaan psikologi Berbinar Insightful Indonesia yang mencakup pemasaran, data staf, e-learning, dan layanan psikolog.',
      longDescription: 'Saya berperan sebagai Backend Developer dalam pengembangan ekosistem digital Berbinar Insightful Indonesia. Proyek ini mencakup website bisnis utama untuk pemasaran, website staf untuk pengelolaan data karyawan, BerbinarPlus untuk e-learning, dan website layanan psikolog. Backend dikembangkan menggunakan Laravel dengan CI/CD GitHub Workflow, deployment melalui Termius, dan layanan hosting.',
      category: 'Psikologi & Bisnis',
      duration: '6 bulan',
      role: 'Backend Developer',
      features: [
        'Website utama untuk pemasaran perusahaan psikologi',
        'Website staf untuk pengelolaan data karyawan',
        'BerbinarPlus untuk e-learning',
        'Website layanan psikolog',
        'Integrasi multi-platform',
        'CI/CD dengan GitHub Workflow',
        'Deployment otomatis melalui Termius',
        'Manajemen pengguna dan autentikasi',
        'Dashboard admin',
        'Layanan hosting'
      ],
      challenges: 'Membangun ekosistem digital terintegrasi untuk kebutuhan bisnis, staf, e-learning, dan layanan psikolog dengan keamanan serta efisiensi tinggi.',
      solutions: 'Menggunakan Laravel untuk backend modular, CI/CD GitHub Workflow untuk deployment otomatis, serta Termius dan layanan hosting untuk pengelolaan server yang efisien dan aman.'
    }
  },
  'kopi-kelana': {
    id: {
      title: 'Kopi Kelana - Aplikasi Kedai Kopi',
      description: 'Aplikasi kedai kopi dengan pemesanan kopi, Coffee Meetup lintas zona waktu, konversi mata uang, rekomendasi menu, dan gamifikasi poin untuk voucher diskon.',
      longDescription: 'Sebagai Fullstack Developer, saya membangun aplikasi Kopi Kelana menggunakan Flutter untuk frontend dan Laravel sebagai backend API. Pelanggan dapat memesan kopi secara online, memilih menu Coffee Meetup untuk menjadwalkan sesi lintas zona waktu, serta mendapatkan konversi harga otomatis dari mata uang asing ke Rupiah. Sistem merekomendasikan menu berdasarkan harga yang telah dikonversi dan menyediakan fitur gamifikasi berupa poin transaksi yang dapat ditukar dengan voucher diskon.',
      category: 'Makanan & Minuman',
      duration: '2 bulan',
      role: 'Fullstack Developer',
      features: [
        'Pemesanan kopi online melalui aplikasi',
        'Menu Coffee Meetup untuk penjadwalan lintas zona waktu',
        'Konversi mata uang asing ke Rupiah secara otomatis',
        'Rekomendasi menu berdasarkan harga yang dikonversi',
        'Gamifikasi: mengumpulkan poin dari transaksi',
        'Penukaran poin dengan voucher diskon',
        'Manajemen menu, transaksi, dan pengguna',
        'Integrasi API antara aplikasi dan backend',
        'Notifikasi status pesanan',
        'Dashboard admin untuk pemantauan data'
      ],
      challenges: 'Membangun konversi harga real-time, fitur meetup lintas zona waktu, dan gamifikasi yang terintegrasi dengan transaksi tanpa mengurangi performa aplikasi.',
      solutions: 'Menggunakan API nilai tukar untuk konversi real-time, logika penjadwalan lintas zona waktu, serta sistem gamifikasi terintegrasi pada backend.'
    }
  },
  'hima-sistem-informasi': {
    id: {
      title: 'Website Himpunan Mahasiswa Sistem Informasi',
      description: 'Website komunitas Himpunan Mahasiswa Sistem Informasi dengan integrasi Spotify, panduan mahasiswa, halaman penjualan merchandise, dan fitur lainnya.',
      longDescription: 'Sebagai Frontend Developer, saya mengembangkan website komunitas Himpunan Mahasiswa Sistem Informasi menggunakan Laravel Inertia. Website ini menyediakan integrasi Spotify untuk playlist komunitas, panduan mahasiswa baru, halaman penjualan merchandise, serta informasi kegiatan dan layanan himpunan. Frontend dibuat dengan Inertia.js dan backend menggunakan MySQL.',
      category: 'Komunitas & Pendidikan',
      duration: '4 bulan',
      role: 'Frontend Developer',
      features: [
        'Integrasi playlist Spotify untuk komunitas',
        'Panduan mahasiswa baru',
        'Halaman penjualan merchandise',
        'Informasi kegiatan dan acara himpunan',
        'Manajemen konten dinamis',
        'Dashboard admin untuk pengelolaan data',
        'Autentikasi anggota',
        'Desain responsif dan modern'
      ],
      challenges: 'Mengintegrasikan fitur Spotify, membangun sistem pengelolaan konten yang mudah digunakan, serta menjaga website tetap responsif dan mudah diakses.',
      solutions: 'Menggunakan Laravel Inertia untuk frontend interaktif, integrasi Spotify API, serta desain UI/UX yang ramah pengguna dan perangkat mobile.'
    }
  },
  'aplikasi-kriptografi': {
    id: {
      title: 'Aplikasi Kriptografi - Enkripsi & Dekripsi',
      description: 'Aplikasi kriptografi mobile dengan fitur enkripsi dan dekripsi menggunakan metode klasik dan modern, serta super enkripsi untuk keamanan berlapis.',
      longDescription: 'Proyek akhir mata kuliah Kriptografi yang saya kembangkan sebagai Mobile Developer menggunakan Flutter. Aplikasi statis ini memiliki database lokal dan menyediakan berbagai metode kriptografi untuk enkripsi serta dekripsi pesan, yaitu Caesar Cipher, Playfair Cipher, Stream Cipher, dan Block Cipher. Aplikasi juga mendukung super enkripsi yang menggabungkan beberapa metode untuk keamanan berlapis.',
      category: 'Keamanan & Kriptografi',
      duration: '1 bulan',
      role: 'Mobile Developer',
      features: [
        'Enkripsi dan dekripsi pesan dengan Caesar Cipher',
        'Enkripsi dan dekripsi dengan Playfair Cipher',
        'Implementasi Stream Cipher',
        'Implementasi Block Cipher',
        'Super Enkripsi dengan beberapa metode',
        'Database lokal untuk riwayat enkripsi dan dekripsi',
        'Antarmuka intuitif dan mudah digunakan',
        'Penjelasan cara kerja setiap algoritma',
        'Visualisasi proses enkripsi dan dekripsi',
        'Mode offline tanpa koneksi internet'
      ],
      challenges: 'Mengimplementasikan berbagai algoritma kriptografi secara benar dan efisien, membangun super enkripsi, serta menyediakan antarmuka yang mudah dipahami.',
      solutions: 'Melakukan riset mendalam, pengujian ketat, menggunakan database SQLite lokal, dan merancang UI/UX yang membantu pemahaman konsep kriptografi.'
    }
  },
  'cryptoguard-messaging': {
    id: {
      title: 'CryptoGuard - Aplikasi Pesan Aman',
      description: 'Aplikasi pesan terenkripsi end-to-end dengan kunci publik dan privat, enkripsi file, serta steganografi gambar untuk keamanan maksimal.',
      longDescription: 'Proyek akhir mata kuliah Kriptografi yang saya kembangkan sebagai Mobile Developer menggunakan Flutter. CryptoGuard adalah sistem pesan terenkripsi end-to-end yang menggunakan konsep kunci publik dan privat. Setiap pengguna memiliki pasangan kunci untuk mengenkripsi dan mendekripsi pesan. Aplikasi mendukung enkripsi teks, enkripsi file, dan steganografi untuk menyembunyikan pesan rahasia di dalam gambar.',
      category: 'Keamanan & Kriptografi',
      duration: '1 bulan',
      role: 'Mobile Developer',
      features: [
        'Enkripsi end-to-end dengan kunci publik dan privat (RSA)',
        'Pembuatan pasangan kunci untuk setiap pengguna',
        'Enkripsi dan dekripsi pesan teks real-time',
        'Enkripsi file berbagai format',
        'Steganografi untuk menyembunyikan pesan dalam gambar',
        'Ekstraksi pesan tersembunyi dari gambar',
        'Manajemen kunci kriptografi yang aman',
        'Database lokal untuk menyimpan pesan terenkripsi',
        'Antarmuka chat yang aman dan intuitif',
        'Verifikasi integritas pesan',
        'Mode offline untuk keamanan maksimal'
      ],
      challenges: 'Mengimplementasikan kriptografi asimetris RSA, mengelola kunci publik dan privat, menerapkan steganografi tanpa menurunkan kualitas gambar, serta menjaga performa saat mengenkripsi file besar.',
      solutions: 'Menggunakan RSA untuk enkripsi asimetris, AES untuk file besar, penyimpanan kunci privat terenkripsi, algoritma LSB untuk steganografi, serta kompresi dan pemotongan file.'
    }
  },
  'pandawara-bersih-lingkungan': {
    id: {
      title: 'Pandawara - Website Bersih-Bersih Lingkungan',
      description: 'Website bertema bersih-bersih lingkungan dengan fitur pelaporan, dokumentasi kegiatan, dashboard admin, dan sisi pengguna.',
      longDescription: 'Saya mengembangkan website Pandawara yang berfokus pada kegiatan bersih-bersih lingkungan. Pengguna dapat melaporkan lokasi, mendokumentasikan kegiatan, dan melihat galeri aksi. Admin dapat memantau, memverifikasi, serta mengelola laporan, dokumentasi, kegiatan, dan relawan. Sistem dibangun menggunakan PHP native dan MySQL.',
      category: 'Lingkungan & Komunitas',
      duration: '2 bulan',
      role: 'Fullstack Developer',
      features: ['Sisi pengguna untuk pelaporan lokasi dan upload dokumentasi', 'Sisi admin untuk verifikasi laporan dan dokumentasi', 'Dashboard monitoring admin', 'Galeri dokumentasi aksi bersih-bersih', 'Autentikasi pengguna dan admin', 'Notifikasi status laporan', 'Manajemen kegiatan dan relawan', 'Desain responsif'],
      challenges: 'Membangun sistem pelaporan dan dokumentasi yang mudah digunakan, mengelola verifikasi data, serta memastikan keamanan dan kecepatan akses data.',
      solutions: 'Menggunakan query SQL efisien, validasi input dan upload file, dashboard monitoring admin, serta sistem notifikasi otomatis.'
    }
  },
  'persewaan-konser': {
    id: {
      title: 'Website Persewaan Alat Konser',
      description: 'Website persewaan alat konser dengan fitur admin dan pengguna untuk pemesanan alat secara online menggunakan PHP native dan MySQL.',
      longDescription: 'Saya mengembangkan website persewaan alat konser dengan sisi admin dan pengguna. Pengguna dapat melihat alat yang tersedia, melakukan pemesanan online, dan menerima konfirmasi otomatis. Admin dapat mengelola alat, stok, jadwal peminjaman, serta memantau proses pemesanan. Sistem menggunakan PHP native dan MySQL.',
      category: 'Acara & Penyewaan Alat',
      duration: '3 bulan',
      role: 'Fullstack Developer',
      features: ['Sisi pengguna untuk melihat alat dan melakukan pemesanan online', 'Sisi admin untuk mengelola alat, stok, dan jadwal peminjaman', 'Autentikasi pengguna dan admin', 'Notifikasi email konfirmasi pesanan', 'Dashboard monitoring admin', 'Riwayat pemesanan dan manajemen alat', 'Desain responsif'],
      challenges: 'Membangun sistem pemesanan real-time tanpa framework, memastikan keamanan data, serta mengelola notifikasi otomatis.',
      solutions: 'Menggunakan query SQL efisien, validasi input ketat, sistem notifikasi email otomatis, dan dashboard monitoring.'
    }
  }
};

export function getLocalizedProject(project: Project, locale: string): Project {
  if (locale !== 'id') {
    return project;
  }

  const translation = projectTranslations[project.id]?.id;
  return translation ? { ...project, ...translation } : project;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
