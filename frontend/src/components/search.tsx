import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import GameService from '../services/game-service';
 
const GameSearch: FunctionComponent = () => {
  
  const [term, setTerm] = useState<string>('');
  const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const API_KEY = 'key=cef989088c794acf934ff517ffec5d29';

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if(term.length <= 3) {
      setGames([]);
      return;
    }
       
    // let url = `https://api.rawg.io/api/games/${term}?${API_KEY}`;
    // const response = fetch(url ,{method: 'get'})
    // .then(response =>  response.json())
    // .then(games => {
    //     setGames(games);
    //     console.log(games);
    //     setError(null);
    // }).catch(function(err) {
    //     console.log('erreur');
    //     setError(err.message);
    //     setGames(null);
    // }).finally(() => {
    //     setLoading(false);
    // });

     GameService.searchGame(term)
        .then(games => setGames(games))
        .catch(function(err) {
            console.log('erreur');
            setError(err.message);
            setGames(null);
        }).finally(() => {
        });
  }

  
  return (
    <div className="row">
        <div className="col-4">
          {error && (
            <div>{`Pas de jeu correspondant - ${error}`}</div>
          )}
        <input type="text" placeholder="Rechercher un jeu" value={term} onChange={e => handleInputChange(e)} /> 
            <div className='collection'>
                {games && games.map((game) => (
                    <Link key={game.id} to={`/jeux/${game.id}`} className="collection-item">
                        {game.name}
                    </Link>
                ))}
            </div> 
        </div>
    </div>
  );
}
  
export default GameSearch;