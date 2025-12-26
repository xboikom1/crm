import Header from '@/src/app/components/header';
import { Company, getCompany } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;
  if (!company) {
    return null;
  }

  return <Header>{`Company (${company.title})`}</Header>;
}
