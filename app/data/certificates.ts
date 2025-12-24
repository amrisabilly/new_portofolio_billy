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
    image: '/sertifikasi/employee_month.webp',
    credentialUrl: 'https://berbinar.co.id',
    skills: ['Web Development', 'Mobile Apps Development', 'Outstanding Performance', 'Team Contribution', 'Technical Excellence', 'Professional Achievement']
  },
  {
    id: 'wakil-ketua-staf-frontend-developer',
    title: 'Wakil Ketua dan Staf Front-end Developer',
    issuer: 'HIMASISFO UPN Veteran Yogyakarta',
    year: '2025',
    shortId: '013/A/SF/KOMUNITASWEBSITE/HIMASISFO/II/2025',
    description: 'Sertifikat apresiasi sebagai bentuk penghargaan atas kontribusi yang luar biasa serta dedikasi yang tinggi dalam proses pengembangan dan pengelolaan website HIMASISFO. Usaha dan kerja keras telah memberikan kontribusi signifikan dalam meningkatkan kualitas, fungsi, dan kemudahan penggunaan platform. Diberikan di Yogyakarta pada tanggal 27 Januari 2025.',
    image: '/sertifikasi/apresiasi_hima.webp',
    credentialUrl: 'https://himasisfo.upnyk.ac.id',
    skills: ['Frontend Development', 'Web Development', 'Team Leadership', 'Website Management', 'UI/UX Implementation', 'Project Coordination']
  },
  {
    id: 'belajar-dasar-ai',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    shortId: 'DCOD-AI-002',
    description: 'Kelas untuk pemula yang ingin memulai karier di dunia AI. Materi mencakup konsep dasar Artificial Intelligence (AI), data untuk AI dan pemanfaatannya dalam pengembangan AI, pengantar Machine Learning sebagai bagian dari AI beserta contoh penerapannya, serta Deep Learning dengan konsep penting dan implementasi penerapannya. Di akhir kelas, siswa mampu menelaah berbagai konsep dasar dalam AI beserta penerapannya dengan baik.',
    image: '/sertifikasi/belajar_ai.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Science', 'AI Concepts', 'ML Basics']
  },
  {
    id: 'belajar-membuat-aplikasi-web-react',
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-REACT-003',
    description: 'Kelas untuk Front-End Web Developer yang ingin mengembangkan website dengan komponen UI yang reusable, deklaratif, dan reaktif terhadap perubahan data. Materi mencakup pengenalan React dan ekosistemnya, konsep dasar React (composition, declarative code, unidirectional data flow), React UI Component (element, component, dan properti), serta Stateful Component (class component, state, controlled component). Di akhir kelas, siswa dapat membuat aplikasi web dengan React menggunakan functional component, stateful component, dan controlled component.',
    image: '/sertifikasi/belajar_react.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['React.js', 'Component', 'Props', 'State', 'Controlled Component', 'Functional Component']
  },
  {
    id: 'belajar-dasar-pemrograman-javascript',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-JS-004',
    description: 'Kelas untuk individu yang ingin menjadi Web Developer/Back-end developer menggunakan Node.js dengan standar kompetensi industri yang divalidasi oleh AWS. Materi mencakup sintaksis JavaScript, function, struktur data (Object, Array, Map, Set), kondisional dan looping, ECMAScript Module, OOP, Functional Programming, Asynchronous Process (callback, Promise, async-await), dan Code Quality. Di akhir kelas, siswa menguasai dasar JavaScript untuk pengembangan aplikasi web.',
    image: '/sertifikasi/belajar_js.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['JavaScript', 'Node.js', 'OOP', 'Functional Programming', 'Async/Await', 'ES Modules']
  },
   {
    id: 'belajar-membuat-frontend-web-pemula',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-FE-005',
    description: 'Kelas untuk Front-End Web Developer yang ingin mengembangkan website dengan fungsionalitas lebih dari sekadar media informasi. Materi mencakup Browser Object Model (BOM), Document Object Model (DOM), manipulasi DOM dengan JavaScript, penerapan event untuk interaktifitas, dan penyimpanan data menggunakan Web Storage. Di akhir kelas, siswa dapat membuat aplikasi front-end web yang interaktif dengan fitur penyimpanan.',
    image: '/sertifikasi/belajar_frontend.webp',
    credentialUrl: 'https://www.dicoding.com/certificates',
    skills: ['JavaScript', 'DOM Manipulation', 'Event Handling', 'Web Storage', 'Interactive Web']
  },
  {
    id: 'belajar-dasar-pemrograman-web',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    shortId: 'DCOD-WEB-006',
    description: 'Kelas ini membahas tuntas dasar HTML dan CSS sebagai fondasi pembuatan website. Materi mencakup pengenalan HTML, pendalaman HTML dengan elemen semantik, pengenalan CSS, pendalaman CSS dengan styling lanjutan, dan layout responsif dengan Flexbox. Disusun dan diverifikasi oleh tim expert Dicoding dengan materi yang terstruktur dan komprehensif.',
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
