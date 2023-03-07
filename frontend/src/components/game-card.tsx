import React, { FunctionComponent } from 'react';
import './game-card.css';
// import formatTag from '../helpers/format-tag';

// React-17
// import { useHistory } from 'react-router-dom';
// React-18
import { useNavigate } from 'react-router-dom';


// type Props = {
//     game: Games,
//     width?: string,
//     colCard?: string,
//     height?: string
// };

const GameCard: FunctionComponent = ({
    width = '100%', height = '350px', colCard = "col-sm-12 col-md-6"
     }) => {

    // React-17
    // const history = useHistory();

    // React-18
    const navigate = useNavigate();

    const goToGame = (id: number) => {
        // React-17
        // history.push(`/jeux/${id}`);

        // React-18
        navigate(`/jeux/${id}`);
    }
    return (
        <div className={colCard}>
            <div className="card mx-auto" onClick={() => goToGame(game.id)} style={{ width: width}}>
                <img className="card-img-top img-responsive img-fluid" style={{ height: height}} src={game.background_image} alt={game.name}/>
                <div className="card-body text-black">
                    <h5 className="card-text">{game.name} <span className="badge rounded-pill text-bg-primary" data-badge-caption="/ 5">{game.rating}</span></h5>
                    <p><small>Date de sortie : {new Date(game.released).toLocaleDateString("fr")}</small></p>
                </div>
            </div>
      </div>
    );
}
export default GameCard;