import { getCompanies } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CompaniesClientWrapper from '@/src/app/components/companies-client-wrapper';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompaniesClientWrapper />
    </HydrationBoundary>
  );
}
