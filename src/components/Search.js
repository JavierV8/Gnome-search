import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const { value, setValue } = props;

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-component">
      <img
        src={process.env.PUBLIC_URL + "search.png"}
        className="header-search-image"
        alt="img"
      />
      <input
        className="header-search-input"
        placeholder="Search by name"
        name="search"
        value={value}
        onChange={(e) => inputHandler(e)}
      />
    </div>
  );
};

export default Search;
