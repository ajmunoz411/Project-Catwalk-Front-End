import React from 'react';

const Search = ({ handleChange }) => (
  <div>
    <form className="form">
      <input type="search" name="input" placeholder="Have a question? Search for answers..." className="search-field" onChange={(e) => handleChange(e)} />
      <button type="submit" className="search-button">
        <img src="assets/search.png" alt="Search" />
      </button>
    </form>
  </div>
);

export default Search;
