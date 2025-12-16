'use client';

import Button from '@/src/app/components/button';
import { useRouter } from 'next/navigation';

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
