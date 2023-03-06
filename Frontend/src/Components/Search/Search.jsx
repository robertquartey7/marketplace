import React from "react";
import "./Search.css";
function Search() {
  return (
    <div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
