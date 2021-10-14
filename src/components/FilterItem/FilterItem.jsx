import React from 'react';
import "./FilterItem.scss"


const FilterItem = (props) => {
    const { filterLabel, filterAttribute, clicked } = props; 

    return (
        <div>
            <input type="checkbox" id={`filter__${filterAttribute}`} name={`filter__${filterAttribute}`} className={`filter__${filterAttribute}`} value={`${filterAttribute}`} onClick={clicked}/>
            <label for = {`filter__${filterAttribute}`} > {filterLabel} </label>
        </div>
    )
}

export default FilterItem
