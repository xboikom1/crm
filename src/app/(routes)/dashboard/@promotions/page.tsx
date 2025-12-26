import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPromotions } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import DashboardPromotionsClient from '@/src/app/components/dashboard-clients/dashboard-promotions-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['promotions'],
    queryFn: () => getPromotions({}, { cache: 'no-store' }),
    staleTime: 10_000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DashboardPromotionsClient />
    </HydrationBoundary>
  );
}
