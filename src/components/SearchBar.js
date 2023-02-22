import React from "react";
import "../App.css";
import { useState } from "react";

const SearchBar = ({ searchItem, totalImages, pageDefault }) => {
  const [input, setinput] = useState('');
  const [istotal, setistotal] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    searchItem(input);
    setistotal(true);
    pageDefault(1);
  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <h1 className="title"><i>ImageBox</i></h1>
        <div className="searchWrapper">
          <input type="search" className="search" placeholder="Search images..." value={input}
            onChange={(e) => setinput(e.target.value)} />
          <button type="submit" className="searchbtn">Search</button>
        </div>
        {
          istotal ?
            <p className="totalImages">Images Found : {totalImages < 500 ? totalImages : <span>500 & more...</span>}</p>
            :
            null
        }

      </form>
    </div>
  );
};

export default SearchBar;
