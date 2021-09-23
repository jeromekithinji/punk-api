import React from 'react'
import "./Card.scss";


const Card = (props) => {
    const { beer } = props;
    return (
        <div className="card">
                <img className="card__img" src={beer.image_url} alt={beer.name} />
                <div className="card__heading">
                    <p className="card__name">{beer.name}</p>
                    <p className="card__tagline">{beer.tagline}</p>
                </div>
                <div className="card__figures">
                    <dl className="card__figure">
                        <dt className="card__figure-label">
                            ABV
                        </dt>
                        <dd className="card__figure-value">
                            {beer.abv}
                        </dd>
                    </dl>
                    <dl className="card__figure">
                        <dt className="card__figure-label">
                            IBU
                        </dt>
                        <dd className="card__figure-value">
                            {beer.ibu}
                        </dd>
                    </dl>
                    <dl className="card__figure">
                        <dt className="card__figure-label">
                            EBC
                        </dt>
                        <dd className="card__figure-value">
                            {beer.ebc}
                        </dd>
                    </dl>
                    <dl className="card__figure">
                        <dt className="card__figure-label">
                            PH
                        </dt>
                        <dd className="card__figure-value">
                            {beer.ph}
                        </dd>
                    </dl>
                </div>
                <div className="card__description"><p>{beer.description}</p></div>
        </div>
    )
}

export default Card
