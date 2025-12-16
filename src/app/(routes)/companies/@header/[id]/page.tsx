import Header from '@/src/app/components/header';
import { use } from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  return <Header>{`Company (${id})`}</Header>;
}
