import clsx from 'clsx';
import React from 'react';
import { CompanyStatus } from '@/src/lib/api';

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',

  [CompanyStatus.NotActive]: 'Not Active',

  [CompanyStatus.Pending]: 'Pending',

  [CompanyStatus.Suspended]: 'Suspended',
};

export default function StatusLabel({ status, disabled }: StatusLabelProps) {
  return (
    <>
      <div
        className={clsx(
          'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
          status === CompanyStatus.Active && 'bg-green-100 text-green-700',
          status === CompanyStatus.NotActive && 'bg-red-100 text-red-700',
          status === CompanyStatus.Pending && 'bg-orange-100 text-orange-700',
          status === CompanyStatus.Suspended && 'bg-blue-100 text-blue-700',
          {
            ['opacity-75 cursor-not-allowed']: disabled,
          },
        )}
      >
        <span className="w-1 h-1 mr-2 rounded-full bg-current" />
        {labelByStatus[status]}
      </div>
    </>
  );
}
