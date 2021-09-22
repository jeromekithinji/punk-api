import React from 'react';
import "./FilterItem.scss"


const FilterItem = (props) => {
    const { filterLabel, filterAttribute, clicked } = props; 

    return (
        <div>
            <label for = {`filter__${filterAttribute}`} > {filterLabel} </label>
            <input type="checkbox" id={`filter__${filterAttribute}`} name={`filter__${filterAttribute}`} className={`filter__${filterAttribute}`} value={`${filterAttribute}`} onClick={clicked}/>
        </div>
    )
}

export default FilterItem
