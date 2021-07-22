import React, { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
        <div className="Characters">
            {characters.map(character => (
                <Card
                    image={character.image}
                    name={character.name}
                    species={character.species}
                />
            ))}
        </div>
    )
}

export default Characters