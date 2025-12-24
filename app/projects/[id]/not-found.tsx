import Link from 'next/link';
import Container from '@/app/components/ui/Container';
import Button from '@/app/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="text-9xl font-black text-black">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold">Project Not Found</h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <div className="pt-4">
            <Link href="/#projects">
              <Button variant="primary">Back to Projects</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
