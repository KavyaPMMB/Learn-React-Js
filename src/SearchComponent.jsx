// SearchComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    // Push the search query to the URL as a query parameter
    history.push(`/search?q=${searchQuery}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
