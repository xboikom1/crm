'use client';

import { useRouter } from 'next/navigation';
import Button from './ui_form/button';

export interface AddPromotionButtonProps {
  companyId: string;
}

export default function AddPromotionButton({
  companyId,
}: AddPromotionButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotions
    </Button>
  );
}
