import CompanyHeaderClient from '@/src/app/components/company-header-client';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <CompanyHeaderClient companyId={id} />;
}
