import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getSummarySales } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import DashboardSalesClient from '@/src/app/components/dashboard-clients/dashboard-sales-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['summary-sales'],
    queryFn: () => getSummarySales({ cache: 'no-store' }),
    staleTime: 10_000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DashboardSalesClient />
    </HydrationBoundary>
  );
}
