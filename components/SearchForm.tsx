import React from 'react';
import Form from 'next/form';
import SearchFormReset from '@/components/SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: {
  query?: string
}) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input name="query" defaultValue={query} className="search-input" placeholder="Cherchez des startups" />

      <div className="flex gap-2">
        {query &&
          // permet d'éviter de rendre le composant client-side et de le garder server-side malgré le bouton ce qui améliore les performances de l'app (NextJS 15)
          <SearchFormReset />
        }
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>

      </div>
    </Form>
  );
};
export default SearchForm;
