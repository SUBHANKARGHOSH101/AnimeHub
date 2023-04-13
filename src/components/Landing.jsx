import React from "react";
import Navbar from "./Navbar";
import "../css/Landing.css";

const Landing = ({ query, setQuery, search_anime }) => {
  return (
    <div className="Landing">
      <Navbar isLanding={true} />
      <div className="total-landing-title-box">
        <span className="landing-welcome">Welcome to </span>
        <div className="landing-title-box">
          <span className="nav-title">Anime</span>
        </div>
        <span className="nav-title-end">Hub</span>
      </div>
      <div className="container">
        <form className="landing-search">
          <input
            className="landing-text"
            type="search"
            placeholder="Search Anime..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button
            className="landing-search-btn"
            type="submit"
            onClick={search_anime}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
