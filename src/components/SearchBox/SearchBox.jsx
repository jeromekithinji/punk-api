import React from 'react';
import "./SearchBox";

const SearchBox = (props) => {

    const { searchTerm } = props;

    return (
        <div>
            {/* <form className="search">
                <input placeholder="Search for a beer..." type="text" value={searchTerm} onInput={handleInput} className="searchbox__input" />
                <input type="submit" value="Search" />
            </form> */}

            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    placeholder="pikachu"
                    value = {searchTerm}
                    onInput = {handleInput} 
                    // onInput={(e) => setSearchText(e.target.value)}
                />
                <input className="submit" type="submit" value="Search" />
        </form> */}
        </div>
    )
}

export default SearchBox
