'use client';

import { useQuery } from '@tanstack/react-query';
import { getPromotions, Promotion } from '@/src/lib/api';
import SummaryTable from '@/src/app/components/summary-table';
import SummaryTableHeader from '@/src/app/components/summary-table-header';
import SummaryTableCell from '@/src/app/components/summary-table-cell';
import DashboardCard from '@/src/app/components/dashboard-card';

export default function DashboardPromotionsClient() {
  const { data = [] } = useQuery<Promotion[]>({
    queryKey: ['promotions'],
    queryFn: () => getPromotions({}, { cache: 'no-store' }),
  });

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
