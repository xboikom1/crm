import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-20">
      <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Companies
      </Link>
    </div>
  );
}
