import React, { useState } from 'react';

const SearchBar = () => {
  const [isGoogleSearch, setIsGoogleSearch] = useState(true);

  const toggleEngine = () => {
    setIsGoogleSearch(!isGoogleSearch);
  };

  return (
    <div className="container">
      <div className="head">
        <div className="logo">
          <img src="icons/fox.svg" alt="Fox Logo"/>
        </div>
        <div className="search_box">
          <img
            className="engine"
            id="engineLogo"
            src={isGoogleSearch ? 'icons/google.svg' : 'icons/duck.svg'}
            onClick={toggleEngine}
            style={{ cursor: 'pointer' }}
            alt={isGoogleSearch ? 'Google Logo' : 'DuckDuckGo Logo'}
          />

          <div style={{ display: isGoogleSearch ? 'block' : 'none' }}>
            <form className="google" action="https://google.com/search" method="get">
              <input className="input_box" type="text" name="q" placeholder="Search with Google" />
              <button className="button">
                <img src="icons/search.svg" style={{ cursor: 'pointer' }} alt="Search Icon" />
              </button>
            </form>
          </div>

          <div style={{ display: isGoogleSearch ? 'none' : 'block' }}>
            <form className="duck" action="https://duckduckgo.com/" method="get">
              <input className="input_box" type="text" name="q" placeholder="Search with DuckDuckGo" />
              <button className="button">
                <img src="icons/search.svg" style={{ cursor: 'pointer' }} alt="Search Icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
