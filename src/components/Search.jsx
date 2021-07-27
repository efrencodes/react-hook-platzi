import React from 'react'

const Search = ({ searchInput, search, handleSearch }) => {
    return (
        <div className="Search">
            <input type="text"
                ref={searchInput}
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search
