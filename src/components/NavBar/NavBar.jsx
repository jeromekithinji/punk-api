import React from 'react';
import FiltersList from '../FiltersList/FiltersList';
import "./NavBar.scss";

const NavBar = (props) => {
    // const { searchTerm, handleInput, toggleAbv, toggleClassic, toggleAcidity } = props;
    const { toggleAbv, toggleClassic, toggleAcidity } = props;


    return (
        // <SearchBox searchTerm={searchTerm} /> 
        <div className="navbar">
            <FiltersList toggleAbv={toggleAbv} toggleClassic={toggleClassic} toggleAcidity={toggleAcidity} />
            {/* <FiltersList filterBeers = {filterBeers} /> */}
        </div>
    )
}

export default NavBar
