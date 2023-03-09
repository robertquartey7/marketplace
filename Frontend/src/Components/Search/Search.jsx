import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Search.css";
import SerachResults from "./SearchResults";
function Search() {
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4, 5]);
  const [search, setSearch] = useState();
  let cancel = false;

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (cancel) return false;
    axios
      .get(`${import.meta.env.VITE_APP_URL}store/items?name=${search}`)
      .then((data) => {
        setSearchResult(data.data.data);
        console.log(data.data.data);
      });
    console.log(search);

    return () => (cancel = true);
  }, [search]);

  return (
    <div className="Search">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      {searchResult ? (
        <div
          className="search__history flex-grow-1 my-2"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="search__results bg-light rounded w-100 text-black">
            {searchResult.map((element) => (
              <SerachResults key={element.id} name={element.name} imageUrl={element.imageUrl} id={element.id} />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Search;
