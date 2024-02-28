import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="srch-wrap">
      <div className="search-box">
        <input
          value={searchText}
          type={'text'}
          className="search-inpt"
          name={'searchText'}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={'Search the item you are looking for ...'}
          autoFocus={true}
        />
      </div>
      <div className="search-results">
        <img
          src={require('../../static/others/cart.gif')}
          alt="instaMart-cart"
        />
        <h1>Search what you are looking for</h1>
      </div>
    </div>
  );
};

export default Search;
