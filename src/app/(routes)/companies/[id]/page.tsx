import { notFound } from 'next/navigation';
import { use } from 'react';

export interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const id = Number.parseInt(use(params).id);

  if (Number.isNaN(id)) notFound();

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
