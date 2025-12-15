import React from 'react';
import { getSummaryPromotions } from '@/src/utils/api';
import SummaryTable from '@/src/app/components/summary-table';
import SummaryTableHeader from '@/src/app/components/summary-table-header';
import SummaryTableCell from '@/src/app/components/summary-table-cell';
import DashboardCard from '@/src/app/components/dashboard-card';

export default async function Page() {
  const data = await getSummaryPromotions();

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
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
