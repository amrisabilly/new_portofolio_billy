import { getAllCertificateIds, getCertificateById } from '@/app/data/certificates';
import CertificateDetailClient from '@/app/components/sections/CertificateDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const certificateIds = getAllCertificateIds();
  return certificateIds.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certificate = getCertificateById(id);
  
  if (!certificate) {
    return {
      title: 'Certificate Not Found - Amri Sabilly Portfolio',
      description: 'Certificate not found',
    };
  }

  return {
    title: `${certificate.title} - Amri Sabilly Portfolio`,
    description: certificate.description,
  };
}

export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certificate = getCertificateById(id);

  if (!certificate) {
    notFound();
  }

  return <CertificateDetailClient certificateId={id} />;
}
