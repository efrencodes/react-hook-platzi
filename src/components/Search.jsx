import React from 'react'

const Search = props => {
    const { searchInput, search, handleSearch } = props
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
