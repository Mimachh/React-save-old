import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import GameCard from '../components/game-card';
import { BsFillGridFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Search from "../components/search";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [colCard, setColCard] = useState(
        localStorage.getItem('colCard') || 'col-sm-12 col-md-3'
    );
    const [height, setHeight] = useState(
        localStorage.getItem('height') || "150px"
    );
    const [byPage, setByPage] = useState(
        localStorage.getItem('byPage') || "12"
    );
    const [order, setOrder] = useState(
        localStorage.getItem('order') || "-rating"
    );
    const [url, setUrl] = useState(
        localStorage.getItem('url') || `https://api.rawg.io/api/games?key=cef989088c794acf934ff517ffec5d29&tags=survival-horror,horror&page_size=${byPage}&ordering=${order}&released=2023&page=1`
    );
    
    useEffect(() => {
        localStorage.setItem('colCard', colCard);
        localStorage.setItem('height', height);
        localStorage.setItem('byPage', byPage);
        localStorage.setItem('order', order);
        localStorage.setItem('url', url);
        fetchGames();
    }, [colCard, height, url, order]);

    async function fetchGames() {
        var response = await fetch(url ,{method: 'get'})
        .then(response =>  response.json())
        .then(actualData => {
            //console.log(actualData);
            setData(actualData);
            setError(null);
        }).catch(function(err) {
            console.log('erreur');
            setError(err.message);
            setData(null);
        }).finally(() => {
            setLoading(false);
        });
    }
    async function gamesPagination(newUrl: string) {        
        setUrl(newUrl);
    }

    async function gamesByPage(numberByPage: string) {
        const response = await fetch(url+`&page_size=${numberByPage}`, {method: 'get'})
        .then(response => response.json())
        .then(actualData => {
            //console.log(actualData);
            setData(actualData);
            setError(null);
        }).catch(function(err) {
            console.log('erreur');
            setError(err.message);
            setData(null);
        }).finally(() => {
            setLoading(false);
        });
        setByPage(numberByPage);
    }

    async function filterBy(filter: string) {
        setUrl(`https://api.rawg.io/api/games?key=cef989088c794acf934ff517ffec5d29&tags=survival-horror,horror&page_size=12&ordering=${filter}&page=1`);
    }
  
     function resize(e: number) {
        if (e === 2) {
            setColCard("col-sm-12 col-md-6");
            setHeight("350px");
        } else if (e === 4) {
            setColCard("col-sm-12 col-md-3");
            setHeight("150px");
        } 
    }

    return (
        <div>
            <div className="container">
                {/* Filtres */}
                <Search/>

                <div className="mt-2 d-flex justify-content-between">
                    <div>
                        <p>Nombre de résultats : {data.count - byPage}</p>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="btn btn-outline-warning pt-1 me-2" onClick={() => resize(2)}>
                            <BsFillGridFill/>
                        </button>
                        <button className="btn btn-outline-warning pt-1" onClick={() => resize(4)}>
                            <TfiLayoutGrid4Alt/>
                        </button>
                    </div>
                </div>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                    <div className="">
                        <button className="me-2 btn btn-outline-warning" onClick={() => filterBy("-released")}>Jeux les plus récents</button>
                        <button className="me-2 btn btn-outline-warning" onClick={() => filterBy("-rating")}>Jeux les mieux notés</button>
                        <button className="me-2 btn btn-outline-warning" onClick={() => filterBy("rating")}>Jeux les moins bien notés</button>
                    </div>
                    <div className="d-flex flex-row align-self-baseline">
                        <div className="d-flex align-self-baseline me-2">
                            <p>Résultats par page :</p>
                        </div>
                        <div className="d-flex align-self-baseline">
                            <button className="me-2 btn btn-small btn-outline-warning pt-1" onClick={() => gamesByPage("4")}>4</button>
                            <button className="me-2 btn btn-small  btn-outline-warning pt-1" onClick={() => gamesByPage("8")}>8</button>
                            <button className="me-2 btn btn-small  btn-outline-warning pt-1" onClick={() => gamesByPage("12")}>12</button>
                        </div>
                    </div>

                </div>

                {/* Games */}
                <div className="row">
                    {data.results && data.results.map( game => (
                        <GameCard key={game.id} game={game} colCard={colCard} height={height}/>
                    ))}
                </div>

                <div className="pb-5 text-center">
                {/* Pagination */}
                {data.previous ? 
                    (<button className="btn btn-outline-danger btn-sm" onClick={() => gamesPagination(data.previous)}>Page précédente</button>)
                    : 
                    ("")
                }
                {data.next ? 
                    (<button className="btn btn-outline-warning btn-sm  ms-5" onClick={() => gamesPagination(data.next)}>Page suivante</button>)
                    :
                    ("")
                }
                </div>
            </div>
        </div>
    )

}
export default App;
