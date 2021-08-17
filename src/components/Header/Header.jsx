import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent, SearchInput, SearchButton } from './HeaderStyles';

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <HeaderComponent>
      <h1>Logo</h1>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton>
        <Link to={`/search=${search}`}>Search</Link>
      </SearchButton>
    </HeaderComponent>
  );
};

export default Header;
