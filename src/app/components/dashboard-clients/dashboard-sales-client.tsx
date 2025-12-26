'use client';

import { useQuery } from '@tanstack/react-query';
import { getSummarySales, SummarySales } from '@/src/lib/api';
import SummaryTable from '@/src/app/components/summary-table';
import SummaryTableHeader from '@/src/app/components/summary-table-header';
import SummaryTableCell from '@/src/app/components/summary-table-cell';
import DashboardCard from '@/src/app/components/dashboard-card';

export default function DashboardSalesClient() {
  const { data = [] } = useQuery<SummarySales[]>({
    queryKey: ['summary-sales'],
    queryFn: () => getSummarySales({ cache: 'no-store' }),
  });

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
