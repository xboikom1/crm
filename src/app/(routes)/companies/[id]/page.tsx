import AddPromotionButton from '@/src/app/components/add-promotion-button';
import CompanyInfo from '@/src/app/components/company-info';
import CompanyPromotions from '@/src/app/components/company-promotions';
import Toolbar from '@/src/app/components/toolbar';
import { getCompany, getPromotions } from '@/src/lib/api';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

export interface CompanyPageProps {
  params: { id: string };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = params;

  const queryClient = getQueryClient();

  const company = await queryClient.fetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Toolbar action={<AddPromotionButton companyId={id} />} />
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={id} />
        </div>

        <div className="col-span-9">
          <CompanyPromotions companyId={id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
