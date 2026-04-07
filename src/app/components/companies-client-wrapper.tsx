'use client';
import { useState } from 'react';
import CompanyTable from './company-table';
import Toolbar from './ui_general/toolbar';
import SearchInput from './ui_form/search-input';
import AddCompanyButton from './add-company-button';

export default function CompaniesClientWrapper() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const handleSearch = () => setQuery(search);

  return (
    <>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearchClick={handleSearch}
          placeholder="Search by company name..."
        />
      </Toolbar>
      <CompanyTable filterQuery={query} />
    </>
  );
}
