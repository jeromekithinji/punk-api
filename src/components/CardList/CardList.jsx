import React from 'react';
import Card from '../Card/Card';
import "./CardList.scss";


const CardList = (props) => {
    const { beersToDisplay } = props;
    
    return (
        <>
            {beersToDisplay.map((beer) => ( <Card beer= {beer} />) )}
        </>
    )
}

export default CardList
