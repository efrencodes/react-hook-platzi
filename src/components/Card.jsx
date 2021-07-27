import React from 'react'
import '../styles/card.css'

const Card = props => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h5>{props.species}</h5>
            {props.children}
        </div>
    )
}

export default Card