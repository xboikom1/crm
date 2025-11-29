'use client';

import Modal, { ModalProps } from '@/src/app/components/modal';
import CompanyForm, {
  CompanyFormProps,
} from '@/src/app/components/company-form';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
