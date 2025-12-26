'use client';

import { useQuery } from '@tanstack/react-query';
import { getCategories, getCompanies, Category, Company } from '@/src/lib/api';
import StatCard, {
  StatCardType,
} from '@/src/app/components/stat-card/stat-card';
import DashboardCard from '@/src/app/components/dashboard-card';
import getCountById from '@/src/lib/utils/getCountsById';

export default function DashboardCategoriesClient() {
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => getCategories({ cache: 'no-store' }),
  });

  const { data: companies = [] } = useQuery<Company[]>({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
  });

  const count = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={count[id] ?? 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
