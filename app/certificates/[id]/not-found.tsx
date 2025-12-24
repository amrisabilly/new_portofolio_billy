import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-black mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Certificate Not Found</h2>
        <p className="text-gray-600 mb-8">
          The certificate you're looking for doesn't exist.
        </p>
        <Link
          href="/#certificates"
          className="inline-block bg-black text-white px-8 py-4 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
        >
          Back to Certificates
        </Link>
      </div>
    </div>
  );
}
