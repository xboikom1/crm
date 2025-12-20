import CompanyTable from '@/src/app/components/company-table';
import CompanyRow from '@/src/app/components/company-row';
import { Status } from '@/src/app/components/status-label';
import { getCompanies } from '@/src/lib/api';

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company={'Acme Corp'}
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate={'2025-05-27'}
      />
    </CompanyTable>
  );
}
