import React from 'react';
import CardList from '../CardList/CardList';
import "./Main.scss";

const Main = (props) => {
    const { beerData } = props
    return (
        <div className="main">
            <div className="main__heading">
                <h1 className="main__heading--title">Welcome to Brewdog!</h1>
                <p className="main__heading--subHeading">Check out our products! Enjoy responsibly</p>
            </div>
            <div className="main__cardlist">
                <CardList beersToDisplay= {beerData} />
            </div>
        </div>
    )
}

export default Main
