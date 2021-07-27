import React, {
    useState,
    // useEffect,
    useReducer,
    useMemo,
    useRef,
    useCallback
} from 'react'
import Card from './Card'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'
import '../styles/characters.css'

const initialState = {
    favorite: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorite: [
                    ...state.favorite,
                    action.payload
                ]
            }

        default:
            return state
    }
}

const Characters = () => {
    // const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')
    const [arrFavorites, dispatch] = useReducer(favoriteReducer, initialState)
    const searchInput = useRef(null)

    const characters = useCharacters(API)

    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character/')
    //         .then(response => response.json())
    //         .then(data => setCharacters(data.results))
    // }, [])

    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    // const handleSearch = () => {
    //     // setSearch(event.target.value)
    //     setSearch(searchInput.current.value)
    // }

    // useCallback
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    // const filteredUsers = characters.filter(user => {
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    // useMemo
    const filteredUsers = useMemo(() =>
        characters.filter(user => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),
        [characters, search]
    )

    return (
        <div className="Characters">
            {arrFavorites.favorite.map(favorite => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}

            <Search
                searchInput={searchInput}
                search={search}
                handleSearch={handleSearch}
            />

            {filteredUsers.map(character => (
                <Card
                    key={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    handleClick={handleClick}
                >
                    <button
                        type="button"
                        onClick={() => handleClick(character)}
                    >
                        ADD TO FAVORITE
                    </button>
                </Card>
            ))}
        </div>
    )
}

export default Characters