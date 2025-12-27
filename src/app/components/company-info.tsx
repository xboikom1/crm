'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { Company, getCompany } from '@/src/lib/api';
import StatusLabel from '@/src/app/components/status-label';

export interface CompanyInfoProps {
  companyId: string;
}

export default function CompanyInfo({ companyId }: CompanyInfoProps) {
  const { data, isLoading, error } = useQuery<Company | null>({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId, { cache: 'no-store' }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Company not found</div>;

  const company = data;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center p-7 gap-5 bg-gray-900 rounded">
        <div className="relative w-20 h-20 rounded-full bg-blue-500 overflow-hidden">
          {company.avatar && (
            <Image fill src={company.avatar} alt="" className="object-cover" />
          )}
        </div>
        <p className="pb text-base font-semibold text-white">{company.title}</p>
        <StatusLabel status={company.status} />
      </div>
      <div className="p-7 text-base text-gray-900 bg-gray-100 rounded">
        <p className="pb-5 text-xl font-semibold">About company</p>
        <p className="pb-3">{`Category: ${company.categoryTitle}`}</p>
        <p className="pb-3">{`Country: ${company.countryTitle}`}</p>
        <p className="pb-3">{`Joined date: ${new Date(
          company.joinedDate,
        ).toLocaleDateString('uk')}`}</p>
        <div className="w-full h-px my-8 bg-gray-300" />
        <p>{company.description}</p>
      </div>
    </div>
  );
}
