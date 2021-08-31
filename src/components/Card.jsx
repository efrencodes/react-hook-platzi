import React from 'react'
import '../styles/card.css'

const Card = props => {
    const { image, name, species, children } = props
    return (
        <div className="Card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h5>{species}</h5>
            {children}
        </div>
    )
}

export default Card