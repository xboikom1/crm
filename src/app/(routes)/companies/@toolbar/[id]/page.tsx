import AddPromotionButton from '@/src/app/components/add-promotion-button';
import SearchInput from '@/src/app/components/search-input';
import Toolbar from '@/src/app/components/toolbar';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
