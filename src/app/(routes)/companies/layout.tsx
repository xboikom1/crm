import Sidebar from '@/src/app/components/sidebar';

export interface CompaniesLayoutProps {
  children: React.ReactNode;
}

export default function CompaniesLayout({ children }: CompaniesLayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60 p-10">{children}</div>
    </>
  );
}
