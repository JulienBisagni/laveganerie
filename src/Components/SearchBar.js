import React from 'react';

const SearchBar = ({getQuery, search, updateSearch}) => {
  return (
    <div className="container search__hero">
      <form
      className="search__form"
      onSubmit={getQuery}
      >
      <input
      type="text"
      className="search__bar"
      value={search}
      onChange={updateSearch}
      placeholder="What ingredient do you want to eat?"
      />
      <button
      type=""
      className="search__button">
      Search
      </button>
      </form>
    </div>
  );
}

export default SearchBar;
