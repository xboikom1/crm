import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCategories, getCompanies } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import DashboardCategoriesClient from '@/src/app/components/dashboard-clients/dashboard-categories-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories({ cache: 'no-store' }),
    staleTime: 10_000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10_000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DashboardCategoriesClient />
    </HydrationBoundary>
  );
}
