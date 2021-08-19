import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  HeaderComponent,
  SearchInput,
  SearchBox,
  HeaderElements,
  // Nav,
} from './HeaderStyles';

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <HeaderComponent>
      <HeaderElements className="container">
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Pesquise por músicas, artistas, albums..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to={`/search=${search}`}>
            <AiOutlineSearch className="search-icon" />
          </Link>
        </SearchBox>
        {/* <Nav>
          <Link to="/favorites">Minha Playlist</Link>
        </Nav> */}
      </HeaderElements>
    </HeaderComponent>
  );
};

export default Header;
