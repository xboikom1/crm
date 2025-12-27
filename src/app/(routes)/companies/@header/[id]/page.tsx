import Header from '@/src/app/components/header';
import { getCompany } from '@/src/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  let title = '';

  try {
    const company = await getCompany(id, { cache: 'no-store' });
    if (company?.title) {
      title = `Company (${company.title})`;
    }
  } catch (e) {
    console.error('Header getCompany error', e);
  }

  return <Header>{title}</Header>;
}
