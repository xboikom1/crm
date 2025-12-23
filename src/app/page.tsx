import Image from 'next/image';
import HeroSection from './components/hero-section';
import FeaturesGrid from './components/features-grid';
import StatsPreview from './components/stats-preview';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="flex items-center justify-center px-10 py-6 border-b border-gray-700">
        <Image
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
          priority
        />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-10 py-16">
        <HeroSection />
        <FeaturesGrid />
        <StatsPreview />
      </main>

      <footer className="px-10 py-6 border-t border-gray-700 text-center text-gray-500">
        <p>© 2025 CRM System. All rights reserved.</p>
      </footer>
    </div>
  );
}
