import { getCategories, getCompanies } from '@/src/lib/api';
import StatCard, {
  StatCardType,
} from '@/src/app/components/stat-card/stat-card';
import DashboardCard from '@/src/app/components/dashboard-card';
import getCountById from '@/src/lib/utils/getCountsById';

export default async function Page() {
  const categories = await getCategories({
    next: { revalidate: 10 },
  });
  const companies = await getCompanies({
    next: { revalidate: 10 },
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
              counter={count[id]}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
