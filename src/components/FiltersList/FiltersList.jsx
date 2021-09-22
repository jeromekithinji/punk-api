import React from 'react';
import FilterItem from '../FilterItem/FilterItem';
import "./FiltersList.scss"


const FiltersList = (props) => {

    const { toggleAbv, toggleClassic, toggleAcidity } = props;

    return (
        <div className = "filters">
            <FilterItem filterLabel = "High ABV (> 6.0%)" filterAttribute = "abv" clicked={toggleAbv} /> 
            <FilterItem filterLabel = "Classic (Brew Date < 2010)" filterAttribute = "classic" clicked={toggleClassic} /> 
            <FilterItem filterLabel = "Acidic (pH < 4)" filterAttribute = "acidic" clicked={toggleAcidity} /> 
        </div>
    )
}

export default FiltersList
