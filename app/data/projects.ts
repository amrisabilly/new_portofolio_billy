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
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
    longDescription: 'A powerful task management application designed for teams, featuring real-time collaboration, drag-and-drop task boards, time tracking, and comprehensive project analytics. Built with modern technologies to ensure smooth performance and seamless user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'Redux'],
    category: 'Productivity Tool',
    year: '2024',
    duration: '3 months',
    role: 'Frontend Lead',
    link: '#',
    repository: 'https://github.com/yourusername/task-manager',
    liveDemo: 'https://demo-taskmanager.vercel.app',
    mockups: [
      '/projects/taskmanager/mockup-1.jpg',
      '/projects/taskmanager/mockup-2.jpg',
      '/projects/taskmanager/mockup-3.jpg'
    ],
    features: [
      'Real-time collaborative editing',
      'Drag-and-drop task boards',
      'Team member assignments',
      'Time tracking and reporting',
      'File attachments',
      'Activity timeline',
      'Custom task labels and priorities',
      'Email notifications'
    ],
    challenges: 'Ensuring real-time synchronization across multiple users without conflicts or data loss.',
    solutions: 'Implemented operational transformation algorithms and Socket.io for real-time bidirectional communication. Used MongoDB change streams for detecting and broadcasting updates.'
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform leveraging GPT models for creating marketing copy, blog posts, and social media content.',
    longDescription: 'An innovative AI-powered platform that helps content creators and marketers generate high-quality content using advanced GPT models. Features include multi-language support, tone customization, SEO optimization suggestions, and content templates for various use cases.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL', 'Docker'],
    category: 'AI Application',
    year: '2023',
    duration: '5 months',
    role: 'Full Stack Developer',
    link: '#',
    repository: 'https://github.com/yourusername/ai-content-generator',
    liveDemo: 'https://demo-aicontent.vercel.app',
    mockups: [
      '/projects/ai-content/mockup-1.jpg',
      '/projects/ai-content/mockup-2.jpg',
      '/projects/ai-content/mockup-3.jpg'
    ],
    features: [
      'AI-powered content generation',
      'Multiple content templates',
      'Tone and style customization',
      'SEO optimization suggestions',
      'Multi-language support',
      'Content history and versioning',
      'Export to various formats',
      'API integration'
    ],
    challenges: 'Managing API rate limits and costs while providing a smooth user experience.',
    solutions: 'Implemented intelligent caching, request queuing, and token optimization strategies. Added user tier system with appropriate limits.'
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    description: 'Headless CMS built for creative professionals to showcase their work with customizable templates and SEO optimization.',
    longDescription: 'A flexible headless CMS specifically designed for creative professionals, artists, and designers. Features drag-and-drop page builder, customizable templates, image optimization, and built-in SEO tools to help creatives showcase their work professionally.',
    technologies: ['Next.js', 'Sanity.io', 'Tailwind', 'Vercel', 'TypeScript'],
    category: 'Content Management',
    year: '2023',
    duration: '3 months',
    role: 'Lead Developer',
    link: '#',
    repository: 'https://github.com/yourusername/portfolio-cms',
    liveDemo: 'https://demo-portfoliocms.vercel.app',
    mockups: [
      '/projects/portfolio-cms/mockup-1.jpg',
      '/projects/portfolio-cms/mockup-2.jpg',
      '/projects/portfolio-cms/mockup-3.jpg'
    ],
    features: [
      'Drag-and-drop page builder',
      'Customizable templates',
      'Image optimization',
      'SEO optimization tools',
      'Custom domain support',
      'Analytics integration',
      'Contact form builder',
      'Responsive design'
    ],
    challenges: 'Creating an intuitive drag-and-drop interface that works seamlessly across different screen sizes.',
    solutions: 'Used React DnD library with custom hooks and context for state management. Implemented responsive breakpoint previews.'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}
