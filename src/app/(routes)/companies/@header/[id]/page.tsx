import Header from '@/src/app/components/header';
import { getCompany } from '@/src/lib/api';
import { useQuery } from '@tanstack/react-query';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { id } = params;
  const { data: company } = useQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
  });

  return (
    <Header>{`Company ${company?.title && `(${company?.title})`}`}</Header>
  );
}
