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
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment integration with Stripe, and a powerful admin dashboard for managing products, orders, and customers. The platform includes advanced features like product recommendations, wish lists, and detailed analytics.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Prisma', 'TailwindCSS'],
    category: 'Web Application',
    year: '2024',
    duration: '4 months',
    role: 'Full Stack Developer',
    link: '#',
    repository: 'https://github.com/yourusername/ecommerce-platform',
    liveDemo: 'https://demo-ecommerce.vercel.app',
    mockups: [
      '/portofolio/naga_cargo/porto1.webp',
      '/portofolio/naga_cargo/porto2.webp',
      '/portofolio/naga_cargo/porto3.webp',
      '/portofolio/naga_cargo/porto4.webp'
    ],
    features: [
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Admin dashboard with analytics',
      'Product search and filtering',
      'Shopping cart and wishlist',
      'Order tracking system',
      'Customer reviews and ratings',
      'Responsive mobile design'
    ],
    challenges: 'Managing real-time inventory updates across multiple concurrent users while maintaining data consistency and preventing overselling.',
    solutions: 'Implemented optimistic locking with PostgreSQL and real-time WebSocket connections for instant inventory updates. Used Redis for caching frequently accessed product data.'
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
