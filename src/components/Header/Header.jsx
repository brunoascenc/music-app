import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
  HeaderComponent,
  SearchInput,
  SearchBox,
  HeaderElements,
} from './HeaderStyles';

const Header = () => {
  const [search, setSearch] = useState('');
  let history = useHistory();

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      history.push(`/search=${search}`);
    }
  };

  return (
    <HeaderComponent>
      <HeaderElements>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Pesquise por músicas, artistas, albums..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <Link to={`/search=${search}`}>
            <AiOutlineSearch className="search-icon" />
          </Link>
        </SearchBox>
      </HeaderElements>
    </HeaderComponent>
  );
};

export default withRouter(Header);
