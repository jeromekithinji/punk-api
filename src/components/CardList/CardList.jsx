import React from 'react';
import Card from '../Card/Card';
import "./CardList.scss";


const CardList = (props) => {
    const { beersToDisplay } = props;
    
    return (
        <div className="cardList">
            {beersToDisplay.map((beer) => ( <Card beer= {beer} />) )}
        </div>
    )
}

export default CardList
