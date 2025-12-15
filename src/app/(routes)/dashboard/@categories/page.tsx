import { getSummaryCategories } from '@/src/utils/api';
import StatCard, {
  StatCardType,
} from '@/src/app/components/stat-card/stat-card';
import DashboardCard from '@/src/app/components/dashboard-card';

export default async function Page() {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
