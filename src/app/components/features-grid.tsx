import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Dashboard',
    description:
      'Track key metrics, company statistics, and active promotions in real time.',
    href: '/dashboard',
    icon: '/icons/squares.svg',
  },
  {
    title: 'Companies',
    description:
      'Manage your company database: add new entries, edit information, and monitor statuses.',
    href: '/companies',
    icon: '/icons/briefcase.svg',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
      {features.map((feature) => (
        <Link
          key={feature.href}
          href={feature.href}
          className="group p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 hover:border-lime-200"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-lime-200 transition-colors">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="transition-all group-hover:brightness-0"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-lime-200 transition-colors">
                {feature.title}
              </h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
