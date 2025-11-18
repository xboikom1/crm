import clsx from 'clsx';
import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'not_active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <>
      <div
        className={clsx(
          'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
          status === Status.Active && 'bg-green-100 text-green-700',
          status === Status.NotActive && 'bg-red-100 text-red-700',
          status === Status.Pending && 'bg-orange-100 text-orange-700',
          status === Status.Suspended && 'bg-blue-100 text-blue-700',
          {
            ['opacity-75 cursor-not-allowed']: disabled,
          },
        )}
      >
        <span className="w-1 h-1 mr-2 rounded-full bg-current" />
        {children}
      </div>
    </>
  );
}
