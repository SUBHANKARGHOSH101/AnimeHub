import React from "react";
import "../css/Navbar.css";

const Navbar = ({ isLanding, query, setQuery, search_anime }) => {
  return (
    <nav>
      <ul>
        <li className="nav-left">
          <div className="nav-title-box">
            <span className="nav-title">Anime</span>
          </div>
          <span className="nav-title-end">Hub</span>
        </li>
        {!isLanding && (
          <li className="nav-right">
            <form className="nav-search">
              <input
                className="nav-text"
                type="search"
                placeholder="Search Anime..."
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
              <button
                className="nav-search-btn"
                type="submit"
                onClick={search_anime}
              >
                Search
              </button>
            </form>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
