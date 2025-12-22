'use client';

import { use } from 'react';
import Modal from '@/src/app/components/modal';
import PromotionForm from '@/src/app/components/promotion-form';
import { useRouter } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);
  return (
    <>
      <Modal show={true} onClose={() => router.back()}>
        <PromotionForm companyId={id} />
      </Modal>
    </>
  );
}
