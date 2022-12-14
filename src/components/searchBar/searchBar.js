import React from "react";
import { useState } from "react";

const SearchBar = (setSearch) => {
  const [searchTag, setSearchTag] = useState();
  const handleSearch = (e) => {
    setSearchTag(e.target.value);
  };
  const handleClick = () => {
    setSearch.setSearch(searchTag);
  };
  return (
    <>
      <div className="d-flex justify-content-end my-3">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search..."
          className="m-auto mx-1"
          onChange={handleSearch}
        ></input>
        <div>
          <button className="button mx-auto" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
