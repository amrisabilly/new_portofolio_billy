export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  shortId: string;
  description: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: 'fundamental-project-management-fga-2025',
    title: 'Fundamental Project Management',
    issuer: 'Fresh Graduate Academy - Digital Talent Scholarship',
    year: '2025',
    shortId: '19511214840-1662/FGA/BLSDM.Komdigi/2025',
    description: 'Certificate of Training awarded for successfully completing the Fundamental Project Management training as part of the Fresh Graduate Academy, Digital Talent Scholarship 2025. Organized by the Center for Digital Talent Development, the training was held from October 21-27, 2025, for a total of 10 hours. This certificate recognizes the achievement in mastering essential project management concepts and practices for digital talent development.',
    image: '/sertifikasi/project.webp',
    credentialUrl: '',
    skills: ['Project Management', 'Digital Talent', 'Fundamental Skills', 'Training', 'Fresh Graduate Academy']
  },
  {
    id: 'alibaba-cloud-certified-developer',
    title: 'Alibaba Cloud Certified Developer',
    issuer: 'Alibaba Cloud',
    year: '2026',
    shortId: 'ACCD011970010012171',
    description: 'Alibaba Cloud Certification for successfully developing applications with Alibaba Cloud services. This certification validates expertise in cloud computing, application development, and deployment using Alibaba Cloud platform. The credential demonstrates proficiency in leveraging Alibaba Cloud services to build scalable and efficient cloud-based solutions. Valid until July 15, 2026.',
    image: '/sertifikasi/alibaba.webp',
    credentialUrl: 'https://edu.alibabacloud.com/certification',
    skills: ['Alibaba Cloud', 'Cloud Computing', 'Application Development', 'Cloud Services', 'Cloud Deployment', 'Scalable Solutions']
  },
  {
    id: 'employee-of-the-month-berbinar',
    title: 'Employee of the Month',
    issuer: 'PT Berbinar Insightful Indonesia',
    year: '2025',
    shortId: '432/08/018.432/BII/VI/2029',
    description: 'Certificate of Achievement awarded for outstanding contribution and exceptional performance as Web and Mobile Apps Developer Staff at PT Berbinar Insightful Indonesia. This recognition acknowledges dedication, technical excellence, and significant impact in developing web and mobile applications. Given in May 2025 by Danny Sanjaya Arfensia, S.Psi., M.Psi., Psikolog - CEO of PT Berbinar Insightful Indonesia.',
    image: '/sertifikasi/motm.webp',
    credentialUrl: 'https://berbinar.co.id',
    skills: ['Web Development', 'Mobile Apps Development', 'Outstanding Performance', 'Team Contribution', 'Technical Excellence', 'Professional Achievement']
  },
  {
    id: 'wakil-ketua-staf-frontend-developer',
    title: 'Vice Chair and Front-end Developer Staff',
    issuer: 'HIMASISFO UPN Veteran Yogyakarta',
    year: '2025',
    shortId: '013/A/SF/KOMUNITASWEBSITE/HIMASISFO/II/2025',
    description: 'Certificate of appreciation as a form of recognition for outstanding contribution and high dedication in the development and management process of the HIMASISFO website. The effort and hard work have made a significant impact in improving the quality, functionality, and user-friendliness of the platform. Awarded in Yogyakarta on January 27, 2025.',
    image: '/sertifikasi/apresiasi_hima.webp',
    credentialUrl: 'https://himasisfo.upnyk.ac.id',
    skills: ['Frontend Development', 'Web Development', 'Team Leadership', 'Website Management', 'UI/UX Implementation', 'Project Coordination']
  },
  {
    id: 'belajar-dasar-ai',
    title: 'AI Fundamentals',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    shortId: 'DCOD-AI-002',
    description: 'Beginner-level course for those starting a career in AI. The material covers basic concepts of Artificial Intelligence (AI), data for AI and its utilization in AI development, an introduction to Machine Learning as part of AI with practical examples, and Deep Learning with key concepts and implementation. By the end of the course, students are able to analyze various fundamental AI concepts and their applications effectively.',
    image: '/sertifikasi/belajar_ai.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Science', 'AI Concepts', 'ML Basics']
  },
  {
    id: 'belajar-membuat-aplikasi-web-react',
    title: 'Building Web Applications with React',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-REACT-003',
    description: 'Course for Front-End Web Developers who want to build websites with reusable, declarative, and reactive UI components. The material covers an introduction to React and its ecosystem, basic React concepts (composition, declarative code, unidirectional data flow), React UI Components (elements, components, and props), as well as Stateful Components (class components, state, controlled components). By the end of the course, students can build web applications with React using functional components, stateful components, and controlled components.',
    image: '/sertifikasi/belajar_react.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['React.js', 'Component', 'Props', 'State', 'Controlled Component', 'Functional Component']
  },
  {
    id: 'belajar-dasar-pemrograman-javascript',
    title: 'JavaScript Programming Fundamentals',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-JS-004',
    description: 'Course for individuals aiming to become Web Developers/Back-end developers using Node.js with industry-standard competencies validated by AWS. The material covers JavaScript syntax, functions, data structures (Object, Array, Map, Set), conditionals and loops, ECMAScript Modules, OOP, Functional Programming, Asynchronous Processes (callback, Promise, async-await), and Code Quality. By the end of the course, students master JavaScript fundamentals for web application development.',
    image: '/sertifikasi/belajar_js.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['JavaScript', 'Node.js', 'OOP', 'Functional Programming', 'Async/Await', 'ES Modules']
  },
  {
    id: 'belajar-membuat-frontend-web-pemula',
    title: 'Building Front-End Web for Beginners',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-FE-005',
    description: 'Course for Front-End Web Developers who want to build websites with functionality beyond just information media. The material covers Browser Object Model (BOM), Document Object Model (DOM), DOM manipulation with JavaScript, event implementation for interactivity, and data storage using Web Storage. By the end of the course, students can create interactive front-end web applications with storage features.',
    image: '/sertifikasi/belajar_frontend.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['JavaScript', 'DOM Manipulation', 'Event Handling', 'Web Storage', 'Interactive Web']
  },
  {
    id: 'belajar-dasar-pemrograman-web',
    title: 'Web Programming Fundamentals',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-WEB-006',
    description: 'This course thoroughly discusses the basics of HTML and CSS as the foundation for website creation. The material covers an introduction to HTML, in-depth HTML with semantic elements, introduction to CSS, advanced CSS styling, and responsive layouts with Flexbox. Compiled and verified by Dicoding expert team with structured and comprehensive material.',
    image: '/sertifikasi/balajar_pemrograman.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['HTML5', 'CSS3', 'Semantic HTML', 'Flexbox', 'Responsive Design', 'Media Query']
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find(cert => cert.id === id);
}

export function getAllCertificateIds(): string[] {
  return certificates.map(cert => cert.id);
}
