import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getSummaryStats } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import DashboardStatsClient from '@/src/app/components/dashboard-clients/dashboard-stats-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['summary-stats'],
    queryFn: () => getSummaryStats({ cache: 'no-store' }),
    staleTime: 10_000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DashboardStatsClient />
    </HydrationBoundary>
  );
}
