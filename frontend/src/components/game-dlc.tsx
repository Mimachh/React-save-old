import React, { FunctionComponent } from 'react';
// React-17
// import { useHistory } from 'react-router-dom';
// React-18
import { useNavigate } from 'react-router-dom';


type Props = {
    game: Game
};


const DlcGame: FunctionComponent<Props>= ({game}) => {

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
            <div key={game.id} onClick={() => goToGame(game.id)}  className="col-9 mx-auto col-md-6">
                <div className="card text-bg-dark">
                <img src={game.background_image} className="card-img img-similar img-fluid" alt="..."/>
                <div className="card-img-overlay">
                    <h6 className="card-title ">{game.name} </h6>
                    <span className="fs-6 badge rounded-pill text-bg-primary" data-badge-caption="/ 5">{game.rating}</span>
                </div>
                </div>
            </div>
    );
}

export default DlcGame;