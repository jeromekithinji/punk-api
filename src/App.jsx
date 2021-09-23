import './App.scss';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

function App() {

    const [beersToDisplay, setBeersToDisplay] = useState([]);
    const [searchResults, setSearchResults] = useState([]); 


    const getBeerData = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(jsonResponse => setBeersToDisplay(jsonResponse))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getBeerData()
    }, []);

    const searchBeer = (e) => {
        e.preventDefault(); 
        // e.target.value ? setSearchResults(beersToDisplay.filter(beer => beer.name.includes(`${e.target.value[0].toUpperCase()}${e.target.value.split("").splice(1, e.target.value.length).join("")}`))) : setSearchResults(searchResults => searchResults = []); 
        const searchedBeer = beersToDisplay.filter(beer => beer.name.includes(`${e.target.value[0].toUpperCase()}${e.target.value.split("").splice(1, e.target.value.length).join("")}`)); 
        setBeersToDisplay(searchedBeer);
    };

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
            <nav className="App__nav"> 
                <NavBar searchBeer= {searchBeer}
                        toggleAbv= {filterBeersByAbv}
                        toggleClassic= {filterBeersByClassic}
                        toggleAcidity= {filterBeersByAcidity}
                />
            </nav>
            <div className="App__content">
                <Main beerData= {beersToDisplay} />
            </div>
        </div>
    );
}

export default App;
