import React, { useState, useEffect, useReducer } from 'react'
import Card from './Card'
import '../styles/characters.css'

const initialState = {
    favorite: []
}

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
    const [characters, setCharacters] = useState([])

    const [arrFavorites, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    return (
        <div className="Characters">
            {arrFavorites.favorite.map(favorite => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}


            {characters.map(character => (
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