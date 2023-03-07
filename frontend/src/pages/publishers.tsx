import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import formatTag from '../helpers/format-tag';
import '../public/css.css';
import SimilarGame from '../components/similar-game';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Params = { id: string };

const Publishers: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    const [game, setGame] = useState<Game|null>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = match.params.id;

    useEffect(() => {
        loadPublisherGames();
    },[id]);
    
    async function loadPublisherGames() {
        await fetch(`https://api.rawg.io/api/games?key=cef989088c794acf934ff517ffec5d29&publishers=${id}`,{method: 'get'})
        .then(response => response.json())
        .then(actualData => {
          setGame(actualData);
            //console.log(actualData);
          setError(null);
        }).catch(function(err) {
            //console.log('erreur');
          setError(err.message);
          setGame(null);
        }).finally(() => {
          setLoading(false);
        });
    }

      return (
        <div className="Games bg-secondary container">
          <h1 className="center-align text-warning">Liste des jeux de {id} ({game.count})</h1>
          {loading && <div>Chargement...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <div className="row">   
            {game.results && game.results.map(tag => (
                <div key={tag.id} className="col-4">
                    <SimilarGame game={tag} key={tag.id}/>
                </div>
          ))}
          </div>
        </div>
      );
}

export default Publishers;