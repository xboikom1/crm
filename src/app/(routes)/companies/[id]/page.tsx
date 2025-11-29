import Header from '@/src/app/components/header';

export interface CompanyPageProps {
  params: { id: string };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  return (
    <>
      <Header>Companies {params.id}</Header>
    </>
  );
}
