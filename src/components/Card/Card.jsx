import React from 'react'
import "./Card.scss";


const Card = (props) => {
    const { beer } = props;
    return (
        <div className="card">
                <img className="card__img"src={beer.image_url} alt={beer.name} />
                <h4>{beer.name}</h4>
                <h6>{beer.tagline}</h6>
                <p>{beer.description}</p>
        </div>
    )
}

export default Card
