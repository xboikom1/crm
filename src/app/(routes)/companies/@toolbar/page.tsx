import Toolbar from '@/src/app/components/toolbar';
import SearchInput from '@/src/app/components/search-input';
import AddCompanyButton from '@/src/app/components/add-company-button';

export default function Page() {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
