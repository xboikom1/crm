'use client';

import CompanyForm from '@/src/app/components/company-form';

export default function NewCompanyPage() {
  return (
    <div className="px-10 py-6">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
