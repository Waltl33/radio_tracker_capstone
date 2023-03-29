import React, {useState} from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
function Search({ updateSearchRadios, searchRadios}) {
  const clearInput = () => {
    updateSearchRadios("")
  }
  return (
    <div className="searchbar">
      <label htmlFor="search" className='search'>Search Animals</label>
      <input
        type="text"
        id="search"
        value = {searchRadios}
        placeholder="Type name or type of animal..."
        onChange={(e) => updateSearchRadios(e.target.value)}
      />
      {/* <div className="searchIcon">
      {searchAnimals.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
      </div> */}
    </div>
  );
}