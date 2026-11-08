import { getAllProjectIds, getLocalizedProject, getProjectById } from '@/app/data/projects';
import ProjectDetailClient from '@/app/components/sections/ProjectDetailClient';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export function generateStaticParams() {
  const projectIds = getAllProjectIds();
  return projectIds.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  const locale = await getLocale();
  const localizedProject = project ? getLocalizedProject(project, locale) : undefined;
  
  if (!localizedProject) {
    return {
      title: 'Project Not Found - Amri Sabilly Portfolio',
      description: 'Project not found',
    };
  }

  return {
    title: `${localizedProject.title} - Amri Sabilly Portfolio`,
    description: localizedProject.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient projectId={id} />;
}
