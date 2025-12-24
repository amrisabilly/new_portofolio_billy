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
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    shortId: 'AWS-CSA-001',
    description: 'Professional certification for designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Validates expertise in AWS services, architectural best practices, and cost-optimization strategies.',
    image: '/certificates/aws-cert.jpg',
    credentialUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS EC2', 'VPC & Networking', 'S3 Storage', 'RDS & DynamoDB', 'Lambda', 'CloudFormation']
  },
  {
    id: 'google-cloud-professional',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    year: '2023',
    shortId: 'GCP-PRO-002',
    description: 'Professional Cloud Architect certification demonstrating ability to design, develop, and manage robust, secure, scalable solutions using Google Cloud technologies.',
    image: '/certificates/gcp-cert.jpg',
    credentialUrl: 'https://cloud.google.com/certification',
    skills: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'GKE', 'Cloud Functions', 'Networking']
  },
  {
    id: 'meta-frontend-developer',
    title: 'Meta Frontend Developer',
    issuer: 'Meta',
    year: '2023',
    shortId: 'META-FE-003',
    description: 'Professional certificate in modern frontend development covering React, JavaScript, HTML/CSS, and UI/UX principles. Demonstrates proficiency in creating responsive websites using industry-standard tools.',
    image: '/certificates/meta-cert.jpg',
    credentialUrl: 'https://www.coursera.org/verify',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5 & CSS3', 'Responsive Design', 'UI/UX', 'Git']
  },
  {
    id: 'mongodb-certified-developer',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    year: '2022',
    shortId: 'MDB-DEV-004',
    description: 'Certification in MongoDB database design and development. Validates skills in data modeling, CRUD operations, aggregation framework, and working with MongoDB drivers.',
    image: '/certificates/mongodb-cert.jpg',
    credentialUrl: 'https://university.mongodb.com/verify',
    skills: ['MongoDB CRUD', 'Data Modeling', 'Aggregation', 'Indexing', 'Atlas', 'Node.js Driver']
  },
  {
    id: 'react-advanced-patterns',
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    year: '2024',
    shortId: 'FEM-RA-005',
    description: 'Advanced React patterns and best practices covering compound components, render props, custom hooks, and performance optimization strategies for scalable applications.',
    image: '/certificates/react-cert.jpg',
    credentialUrl: 'https://frontendmasters.com/certificates',
    skills: ['Custom Hooks', 'Performance', 'Code Splitting', 'Context API', 'HOCs', 'Memoization']
  },
  {
    id: 'nodejs-application-development',
    title: 'Node.js Application Development',
    issuer: 'Linux Foundation',
    year: '2022',
    shortId: 'LF-NODE-006',
    description: 'Professional certification in Node.js application development including Express.js, RESTful APIs, authentication, testing, and deployment strategies.',
    image: '/certificates/nodejs-cert.jpg',
    credentialUrl: 'https://training.linuxfoundation.org/verify',
    skills: ['Node.js Core', 'Express.js', 'REST APIs', 'Authentication', 'Testing', 'Security']
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find(cert => cert.id === id);
}

export function getAllCertificateIds(): string[] {
  return certificates.map(cert => cert.id);
}
