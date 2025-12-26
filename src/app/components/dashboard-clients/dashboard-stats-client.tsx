'use client';

import { useQuery } from '@tanstack/react-query';
import { getSummaryStats, SummaryStats } from '@/src/lib/api';
import StatCard, {
  StatCardType,
} from '@/src/app/components/stat-card/stat-card';

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default function DashboardStatsClient() {
  const { data } = useQuery<SummaryStats>({
    queryKey: ['summary-stats'],
    queryFn: () => getSummaryStats({ cache: 'no-store' }),
  });

  const stats = data ?? {
    promotions: 0,
    categories: 0,
    newCompanies: 0,
    activeCompanies: 0,
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={stats[key]}
          />
        </div>
      ))}
    </div>
  );
}
