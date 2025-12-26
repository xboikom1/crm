'use client';

import { getCompanies } from '@/src/lib/api';
import { useQuery } from '@tanstack/react-query';
import CompanyRow from './company-row';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export interface CompanyTableProps {
  filterQuery: string;
}

export default function CompanyTable({ filterQuery }: CompanyTableProps) {
  const { data, isFetching } = useQuery({
    queryKey: ['companies', filterQuery],
    queryFn: () => getCompanies(filterQuery ? { title: filterQuery } : {}),
    staleTime: 10 * 1000,
  });

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <tr>
              <td colSpan={headers.length} className="text-center">
                Loading...
              </td>
            </tr>
          ) : data?.length ? (
            data.map((company) => (
              <CompanyRow key={company.id} company={company} />
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center">
                No companies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
