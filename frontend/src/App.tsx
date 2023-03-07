// import React, { FunctionComponent, useState, useEffect } from 'react';


  
// const App: FunctionComponent  = () => {

//     const [film, setFilm] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  

//     useEffect(() => {
//         const API_KEY = 'api_key=8062832a5428374bfc456a5f5f454fe6';
//         let url = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=27`;
//         fetch(url,{method: 'get'}).then(response => response.json()).then(actualData =>{
//             setFilm(actualData.results);
//             //console.log(actualData.results);
//             setError(null);
//         }).catch(function(err) {
//             console.log('erreur');
//             setError(err.message);
//             setFilm(null);
//         }).finally(() => {
//             setLoading(false);
//           });
//       }, []);


   
//       return (
//         <div className="App">
//           <h1 className="center-align white-text ">Les dernières actus</h1>
//           {loading && <div>Chargement...</div>}
//           {error && (
//             <div>{`There is a problem fetching the post data - ${error}`}</div>
//           )}
//           <div className="container">
//                 <div className="row">
//                     {film && film.map(({id, title, vote_average, release_date, backdrop_path}) => (
//                         <div className="col s12 m6" key={id}>
//                             <div className="card hoverable">
//                                 <div className="card-image">
//                                     <img src={"https://image.tmdb.org/t/p/original" + backdrop_path} alt="{title}" />
//                                 </div>
//                                 <div className="card-stacked">
//                                     <div className="card-content">
//                                         <p>{title} <span className="new badge blue pulse" data-badge-caption="/ 10">{vote_average}</span></p>
//                                         <p><small>{new Date(release_date).toLocaleDateString("fr")}</small></p>
//                                     </div>
//                                     <div className="card-action center-align">
//                                     <a href="https://google.com">Voir la fiche</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//       );
//     }

  
// export default App;