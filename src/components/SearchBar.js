import React from 'react';

const SearchBar = ({onInputChange}) => {
    return(
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search Movies ..." aria-label="Search" onKeyUp={onInputChange}/>
        </form>
    );
}

export default SearchBar;
