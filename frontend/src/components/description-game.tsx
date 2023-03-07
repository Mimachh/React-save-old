import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import formatTag from '../helpers/format-tag';
import logo from '../helpers/logo';
import storeTag from '../helpers/store';

type Props = {
    game: any,
};

// React-17
// const DescriptionGame: FunctionComponent= ({game} :Props) => {
//     //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
//     function getGoogleLink(name: string){
//         return `http://www.google.com/search?q=${name}`;
//     }

//     return (
//     <div>
//         {/* Released */}
//         <h6>Date de sortie : </h6>
//         {game.released ? (
            
//             <p>{new Date(game.released).toLocaleDateString("fr-FR")}</p>) : (<p>Non renseigné</p>)}
//         {/* Time */}
//         <h6>Temps de jeu : </h6>
//         {game.playtime > 1 ? (<p>{game.playtime} h</p>) : (<p>Non renseigné</p>)}
        
//         {/* Note */}
//         <h6>Note : </h6>
//         <p>{game.rating} / 5</p>
//         {/* Description */}
//         <h6>Description : </h6>
//         <ReactMarkdown>
//             {game.description_raw}
//         </ReactMarkdown>
//         {/* <div dangerouslySetInnerHTML={{ __html: game.description}} /> */}

//         <h6>Disponible sur :</h6>
//         {/* Platformes */}
//         {game.platforms && game.platforms.map((tag :any) => (
//             <span key={tag.platform.id} className="chip grey">
//                 {tag.platform.name}
//                 <img src={logo(tag.platform.name)} alt={tag.platform.name} className='ps-2 pe-1' />
//             </span>
//         ))}
//         {/* Genres */}
//         <h6>Genre associés :</h6>
//         {game.genres && game.genres.map(tag => (
//             <span key={tag.id} className="chip grey">{tag.name}</span>
//         ))}
//         {/* Tags */}
//         <h6>Tags :</h6>
//         {game.tags && game.tags.map(tag => (
//             <span key={tag.id} className="chip grey">{tag.name}</span>
//         ))}
//         {/* Developpeurs */}
//         <h6>Développé par :</h6>
//         {game.developers && game.developers.map(tag => (
//             <span key={tag.id} className={formatTag(tag.name)}><Link to={"/publisher/"+tag.id}>{tag.name}</Link></span>
//         ))}
//         <h6>Où acheter ?</h6>
//        {game.stores && game.stores.map(store => (
//             <a key={store.id} rel="noreferrer" target="_blank" href={"https://" + store.store.domain}>
//                 <span  className={formatTag(store.name)}>
//                     <img src={storeTag(store.store.name)} className="px-1" alt={storeTag(store.store.name)} />
//                         <span className="link-primary text-decoration-underline">{store.store.name}</span>
//                 </span>
//             </a>
//         ))}

//         <table className="table table-dark table-striped mt-3">
//             <thead>
//                 <tr>
//                 <th scope="col">Aller voir <strong>{game.name}</strong> sur</th>
//                 </tr>
//             </thead>
//             <tbody>
                
//                 <tr>
//                 <th scope="row">
//                 {game.reddit_url && (
//                     <a className="link-light hover-link-primary" rel="noreferrer" target="_blank" href={game.reddit_url}>Reddit</a>
//                     )
//                 }
//                 </th>
//                 </tr>
                  
//                 <tr>
//                 <th scope="row">
//                     <a target="_blank" rel="noreferrer" href={getGoogleLink(game.name)}>Google</a>
//                 </th>
//                 </tr>
//                 <tr>
//                 <th scope="row">
//                 {game.website && (

//                     <a rel="noreferrer" target="_blank" href={game.website}>Le site Web du jeu</a>
//                     ) 
//                 }
//                 </th>
//                 </tr>
                 
//             </tbody>
//         </table>                 
//     </div>
//     );
// }


// React-18
const DescriptionGame= ({game} :Props) => {
    //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    function getGoogleLink(name: string){
        return `http://www.google.com/search?q=${name}`;
    }

    return (
    <div>
        {/* Released */}
        <h6>Date de sortie : </h6>
        {game.released ? (
            
            <p>{new Date(game.released).toLocaleDateString("fr-FR")}</p>) : (<p>Non renseigné</p>)}
        {/* Time */}
        <h6>Temps de jeu : </h6>
        {game.playtime > 1 ? (<p>{game.playtime} h</p>) : (<p>Non renseigné</p>)}
        
        {/* Note */}
        <h6>Note : </h6>
        <p>{game.rating} / 5</p>
        {/* Description */}
        <h6>Description : </h6>
        <ReactMarkdown>
            {game.description_raw}
        </ReactMarkdown>
        {/* <div dangerouslySetInnerHTML={{ __html: game.description}} /> */}

        <h6>Disponible sur :</h6>
        {/* Platformes */}
        {game.platforms && game.platforms.map((tag :any) => (
            <span key={tag.platform.id} className="chip grey">
                {tag.platform.name}
                <img src={logo(tag.platform.name)} alt={tag.platform.name} className='ps-2 pe-1' />
            </span>
        ))}
        {/* Genres */}
        <h6>Genre associés :</h6>
        {game.genres && game.genres.map((tag :any) => (
            <span key={tag.id} className="chip grey">{tag.name}</span>
        ))}
        {/* Tags */}
        <h6>Tags :</h6>
        {game.tags && game.tags.map((tag :any) => (
            <span key={tag.id} className="chip grey">{tag.name}</span>
        ))}
        {/* Developpeurs */}
        <h6>Développé par :</h6>
        {game.developers && game.developers.map((tag :any) => (
            <span key={tag.id} className={formatTag(tag.name)}><Link to={"/publisher/"+tag.id}>{tag.name}</Link></span>
        ))}
        <h6>Où acheter ?</h6>
       {game.stores && game.stores.map((store :any) => (
            <a key={store.id} rel="noreferrer" target="_blank" href={"https://" + store.store.domain}>
                <span  className={formatTag(store.name)}>
                    <img src={storeTag(store.store.name)} className="px-1" alt={storeTag(store.store.name)} />
                        <span className="link-primary text-decoration-underline">{store.store.name}</span>
                </span>
            </a>
        ))}

        <table className="table table-dark table-striped mt-3">
            <thead>
                <tr>
                <th scope="col">Aller voir <strong>{game.name}</strong> sur</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <th scope="row">
                {game.reddit_url && (
                    <a className="link-light hover-link-primary" rel="noreferrer" target="_blank" href={game.reddit_url}>Reddit</a>
                    )
                }
                </th>
                </tr>
                  
                <tr>
                <th scope="row">
                    <a target="_blank" rel="noreferrer" href={getGoogleLink(game.name)}>Google</a>
                </th>
                </tr>
                <tr>
                <th scope="row">
                {game.website && (

                    <a rel="noreferrer" target="_blank" href={game.website}>Le site Web du jeu</a>
                    ) 
                }
                </th>
                </tr>
                 
            </tbody>
        </table>                 
    </div>
    );
}
export default DescriptionGame;