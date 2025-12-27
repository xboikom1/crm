import Header from '@/src/app/components/header';
import { getCompany } from '@/src/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  let title = 'Company ';

  const company = await getCompany(id, { cache: 'no-store' });
  if (company?.title) {
    title += company.title;
  }

  return <Header>{title}</Header>;
}
