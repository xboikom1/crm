'use client';

import PromotionForm from '@/src/app/components/promotion-form';
import { use } from 'react';

export interface NewCompanyPageProps {
  params: Promise<{ id: string }>;
}
export default function NewCompanyPage({ params }: NewCompanyPageProps) {
  const { id } = use(params);
  return (
    <div className="px-10 py-6">
      <PromotionForm companyId={id} />
    </div>
  );
}
