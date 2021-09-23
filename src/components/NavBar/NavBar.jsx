import React from 'react';
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox';
import "./NavBar.scss";

const NavBar = (props) => {
    // const { searchTerm, handleInput, toggleAbv, toggleClassic, toggleAcidity } = props;
    const { toggleAbv, toggleClassic, toggleAcidity, searchBeer } = props;


    return (
        // <SearchBox searchTerm={searchTerm} /> 
        <div className="navbar">
            {/* <form className="search"> */}
                <input placeholder="Search for a beer..." type="text" onInput={searchBeer} className="searchbox__input" />
                {/* <input type="submit" value="Search" /> */}
            {/* </form> */}
            {/* <SearchBox searchTerm= {searchBeer} />  */}
            <FiltersList toggleAbv= {toggleAbv} toggleClassic= {toggleClassic} toggleAcidity= {toggleAcidity} />
            {/* <FiltersList filterBeers = {filterBeers} /> */}
        </div>
    )
}

export default NavBar
