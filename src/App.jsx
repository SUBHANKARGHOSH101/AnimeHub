import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  let base_url = `https://api.jikan.moe/v4/`;

  async function search_anime(event, limit = 20) {
    event.preventDefault();
    let url = base_url + "anime?";
    if (query) {
      url += `q=${query}&`;
    }
    url += `limit=${limit}`;
    const response = await fetch(url).then((res) => res.json());
    setData(response.data);
    return true;
  }
  return (
    <>
      <Router>
        <Navbar
          isLanding={true}
          query={query}
          setQuery={setQuery}
          search_anime={search_anime}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                query={query}
                setQuery={setQuery}
                search_anime={search_anime}
              />
            }
          />
        </Routes>
      </Router>
      <div className="footer">
        <div className="logo">
          <span className="span">Anime Hub</span>
        </div>
      </div>
    </>
  );
}

export default App;
