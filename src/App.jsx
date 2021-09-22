import './App.scss';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

function App() {

    const [beersToDisplay, setBeersToDisplay] = useState([]);

    const getBeerData = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(jsonResponse => setBeersToDisplay(jsonResponse))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getBeerData()
    }, []);

    const getYearBrewed = (beer) => {
        const dateBrewed = beer.first_brewed;
        const date = dateBrewed.split("/")
        return date[1];
    }

    const filterBeersByAcidity = (e) => {e.target.checked ? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.ph < 4)) : getBeerData()}

    const filterBeersByAbv = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>beer.abv > 6)) : getBeerData()}

    const filterBeersByClassic = (e) => {e.target.checked? setBeersToDisplay(beersToDisplay.filter((beer)=>getYearBrewed(beer) < 2010)) : getBeerData()}


    return (
        <div className="App">
            <NavBar toggleAbv= {filterBeersByAbv}
                    toggleClassic= {filterBeersByClassic}
                    toggleAcidity= {filterBeersByAcidity}
            />
            <Main beerData= {beersToDisplay} />
        </div>
    );
}

export default App;
