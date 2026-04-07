'use client';

import { useQuery } from '@tanstack/react-query';
import Header from '@/src/app/components/ui_layout/header';
import { getCompany } from '@/src/lib/api';
import { Company} from '@/src/lib/api';

interface CompanyHeaderClientProps {
  companyId: string;
}

export default function CompanyHeaderClient({
  companyId,
}: CompanyHeaderClientProps) {
  const { data, isLoading, error } = useQuery<Company | null>({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId, { cache: 'no-store' }),
  });

  if (isLoading) {
    return <Header>Company...</Header>;
  }

  if (error || !data) {
    return <Header>Company</Header>;
  }

  return <Header>{`Company (${data.title})`}</Header>;
}
