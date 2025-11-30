import Header from '@/src/app/components/header';
import { notFound } from 'next/navigation';
import { use } from 'react';

export interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const id = Number.parseInt(use(params).id);

  if (Number.isNaN(id)) {
    notFound();
  }

  return (
    <>
      <Header>Companies {id}</Header>
    </>
  );
}
