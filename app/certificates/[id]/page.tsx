import { getAllCertificateIds, getCertificateById, getLocalizedCertificate } from '@/app/data/certificates';
import CertificateDetailClient from '@/app/components/sections/CertificateDetailClient';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export function generateStaticParams() {
  const certificateIds = getAllCertificateIds();
  return certificateIds.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certificate = getCertificateById(id);
  const locale = await getLocale();
  const localizedCertificate = certificate ? getLocalizedCertificate(certificate, locale) : undefined;
  
  if (!localizedCertificate) {
    return {
      title: 'Certificate Not Found - Amri Sabilly Portfolio',
      description: 'Certificate not found',
    };
  }

  return {
    title: `${localizedCertificate.title} - Amri Sabilly Portfolio`,
    description: localizedCertificate.description,
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
