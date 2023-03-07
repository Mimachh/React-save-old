import React from 'react';
// React-17 
// import ReactDOM from 'react-dom';

// React-18
import ReactDOM from 'react-dom/client';

import Game from './Games';

// React-17
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

// React-18
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);