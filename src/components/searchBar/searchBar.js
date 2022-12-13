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
      <div className="col-12 d-flex justify-content-end">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search..."
          className="mx-5 my-2"
          onChange={handleSearch}
        ></input>
        <div>
          <button className="btn btn-success  mx-2" onClick={handleClick}>
            {" "}
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
