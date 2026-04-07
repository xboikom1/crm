import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="max-w-3xl text-center mb-16">
      <h1 className="text-5xl font-bold text-white mb-6">
        Welcome to <span className="text-lime-200">CRM System</span>
      </h1>
      <p className="text-xl text-gray-400 mb-10">
        A powerful tool for managing companies, tracking promotions, and
        analyzing business metrics.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/dashboard"
          className="px-8 py-3 bg-lime-200 text-gray-900 font-semibold rounded hover:bg-lime-300 transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/companies"
          className="px-8 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
        >
          Manage Companies
        </Link>
      </div>
    </div>
  );
}
