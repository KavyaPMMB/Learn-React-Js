
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      
    </div>
  );
};

export default SearchResults;
