import CompanyTable from '@/src/app/components/company-table';
import CompanyRow from '@/src/app/components/company-row';
import { Status } from '@/src/app/components/status-label';

export default function CompaniesPage() {
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
