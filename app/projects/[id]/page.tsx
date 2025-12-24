import { getAllProjectIds, getProjectById } from '@/app/data/projects';
import ProjectDetailClient from '@/app/components/sections/ProjectDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const projectIds = getAllProjectIds();
  return projectIds.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project Not Found - Amri Sabilly Portfolio',
      description: 'Project not found',
    };
  }

  return {
    title: `${project.title} - Amri Sabilly Portfolio`,
    description: project.description,
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
