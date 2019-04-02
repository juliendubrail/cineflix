import React from "react";
//import SearchBar from './SearchBar';

const NavBar = ({onInputChange}) => {
  return (
    //<div className="SearchBar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">Cineflix</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search Movies ..." aria-label="Search" onKeyUp={onInputChange}/>
        </form>
  </div>
</nav>
   // </div>
  );
};

export default NavBar;
