import React from 'react';
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox';
import "./NavBar.scss";

const NavBar = (props) => {
    const { toggleAbv, toggleClassic, toggleAcidity, searchBeer } = props;


    return (
        <div className="navbar">
            <div className="navbar__searchbox">
                <input placeholder="Search for a beer..." type="text" onInput={searchBeer} className="navbar__searchbox-input" />
                <label for="" class="navbar__searchbox-label">Search for a beer </label>
            </div>
            <FiltersList toggleAbv= {toggleAbv} toggleClassic= {toggleClassic} toggleAcidity= {toggleAcidity} />
        </div>
    )
}

export default NavBar
