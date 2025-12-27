import Header from '@/src/app/components/header';
import { getCompany } from '@/src/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const company = await getCompany(id, { cache: 'no-store' });
  const title = company?.title ?? '';

  return <Header>{`Company (${title})`}</Header>;
}
