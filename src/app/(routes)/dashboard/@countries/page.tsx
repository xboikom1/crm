import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies, getCountries } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import DashboardCountriesClient from '@/src/app/components/dashboard-clients/dashboard-countries-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['countries'],
    queryFn: () => getCountries({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DashboardCountriesClient />
    </HydrationBoundary>
  );
}
