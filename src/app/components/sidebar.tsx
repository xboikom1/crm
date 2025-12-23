'use client';

import Image from 'next/image';
import SidebarItem from '@/src/app/components/sidebar-item';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const router = useRouter();
  const handleExitButton = () => {
    router.push('/');
  };
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Link href="/" className="py-8 mb-11 mx-auto">
          <Image width={122} height={25} src="/icons/logo.svg" alt="logo" />
        </Link>
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            current={pathname === '/dashboard'}
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            current={pathname.startsWith('/companies')}
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          onClick={handleExitButton}
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
