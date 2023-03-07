import React, { FunctionComponent, useState, useEffect } from 'react';
import '../public/css.css';
import SimilarGame from '../components/similar-game';
import DescriptionGame from '../components/description-game';
import DlcGame from '../components/game-dlc';
import Carousel from '../components/carousel';
import Comment from '../components/comment';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// React-17
// import { RouteComponentProps, useHistory } from 'react-router-dom';
// React-18
import { RouteComponentProps, useNavigate } from 'react-router-dom';


type Params = { id: string };
type Props = {
    match: any,
    width: string,
    height: string
}

const GameDetails: FunctionComponent<RouteComponentProps<Params>> = ({ match, width = "200px", height = "500px" }: Props) => {
    const [game, setGame] = useState<Game|null>([])
    const [screenshot, setScreenshot] = useState<File|null>([])
    const [similar, setSimilar] = useState<String|null>([])
    const [dlc, setDlc] = useState<String|null>([])
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = 'key=cef989088c794acf934ff517ffec5d29';
    const id = match.params.id;
    const [similarUrl, setSimilarUrl] = useState(`https://api.rawg.io/api/games/${id}/game-series?${API_KEY}&page_size=4`);
    const [dlcUrl, setDlcUrl] = useState(`https://api.rawg.io/api/games/${id}/additions?${API_KEY}&page_size=2`);

    // React-17
    // const history = useHistory();

    // React-18
    const navigate = useNavigate();


    useEffect(() => {  
        findGame();
        findScreenshot();
        findSimilar()
        findDLC()
        findComment()
      },
        [id, similarUrl, dlcUrl]);
        
        let url = `https://api.rawg.io/api/games/${id}?${API_KEY}&description&playtime&metacritic&screenshots&reddit_url`;
        async function findGame() {
            await fetch(url ,{method: 'get'})
            .then(response =>  response.json())
            .then(game => {
                //console.log(game);
                setGame(game);
                // console.log(game);
                setError(null);
            }).catch(function(err) {
                console.log('erreur');
                setError(err.message);
                setGame(null);
            }).finally(() => {
                setLoading(false);
            });
        }

        const screenshotsURL = `https://api.rawg.io/api/games/${id}/screenshots?${API_KEY}`;
        async function findScreenshot() {
            await fetch(screenshotsURL ,{method: 'get'})
            .then(response =>  response.json())
            .then(screenshot => {
                setScreenshot(screenshot.results);
                //console.log(screenshot.results);
            setError(null);
            }).catch(function(err) {
                //console.log('erreur');
                setError(err.message);
            setScreenshot(null);
            }).finally(() => {
                setLoading(false);
            });
        }

        async function findSimilar() {
            await fetch(similarUrl ,{method: 'get'})
            .then(response =>  response.json())
            .then(similar => {
                setSimilar(similar);
                //console.log("similar", similar);
                setError(null);
            }).catch(function(err) {
                console.log('erreur');
                setError(err.message);
                setSimilar(null);
            }).finally(() => {
                setLoading(false);
            });
        }

        function similarPagination(newUrl: string) {        
            setSimilarUrl(newUrl);
        }

        async function findDLC() {
            await fetch(dlcUrl ,{method: 'get'})
            .then(response =>  response.json())
            .then(dlc => {
                setDlc(dlc);
                //console.log(dlc.results);
                setError(null);
            }).catch(function(err) {
                console.log('erreur');
                setError(err.message);
                setDlc(null);
            }).finally(() => {
                setLoading(false);
            });
        }
        function dlcPagination(newUrl: string) {
            setDlcUrl(newUrl);
        }

        async function findComment() {
            await fetch(`http://localhost/comments/${id}`)
            .then(response =>  response.json())
            .then(comments => {
                setComments(comments.data);
                console.log(comments.data);
                setError(null);
            }).catch(function(err) {
                console.log('erreur');
                setError(err.message);
                setComments(null);
            }).finally(() => {
                setLoading(false);
            }); 
        }

      return (
        <div className="Games">
          <h1 className="center-align text-warning">{game.name}</h1>
          {loading && <div>Chargement...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
            <div className="container">
            {/* React-17 */}
            {/* <button type="button"  onClick={() => {history.goBack();}} className="btn btn-warning">Retour</button> */}
            {/* React-18 */}
            <button type="button"  onClick={() => navigate(1)} className="btn btn-warning">Retour</button>
                <div className="row">
                    {/* Colonne de Gauche */}
                    <div className="col-md-5 col-12">
                        <DescriptionGame game={game} key={game.id}/>
                    </div>

                    {/* Colonne de Droite */}
                    <div className="col-md-7 col-12">         
                        <div style={{ height: height}} >
                            <Carousel screenshot={screenshot}/>
                        </div>
                        {similar.count > 0 ? (
                            <div className="row">
                                <h6>Dans la même série : ({similar.count})</h6>
                                {similar.results && similar.results.map(similar => (
                                    <SimilarGame game={similar} key={similar.id}/>
                                ))}
                                <div className="text-center">
                                    {similar.previous && (
                                        <button className="me-3 btn btn-outline-warning" onClick={() => similarPagination(similar.previous)}>Précédent</button>
                                    )}
                                    {similar.next && (
                                        <button className="btn btn-outline-primary" onClick={() => similarPagination(similar.next)}>Suivant</button>
                                    )}
                                </div>
                            </div> ) : ("")
                        }
                        {dlc.count > 0 ? (
                            <div className="row">
                                <h6>DLC : ({dlc.count})</h6>
                                {dlc.results && dlc.results.map(dlc => (
                                    <DlcGame game={dlc} key={dlc.id}/>
                                ))}
                                <div className="text-center">
                                    {dlc.previous && (
                                        <button className="me-3 btn btn-outline-warning" onClick={() => dlcPagination(dlc.previous)}>Précédent</button>
                                    )}
                                    {dlc.next && (
                                        <button className="btn btn-outline-primary" onClick={() => dlcPagination(dlc.next)}>Suivant</button>
                                    )}
                                </div>
                            </div> ) : ("")
                        }

                        {comments.length > 0 ? (
                            <div className="row">
                                <h6>Commentaires : ({comments.length})</h6>
                                 {comments && comments.map(comment => (
                                    <Comment comment={comment} key={comment.id}/>
                                ))}
                            </div> ) : ("")
                        }
                    </div>
                </div>
            </div>
        </div>
      );
}

export default GameDetails;