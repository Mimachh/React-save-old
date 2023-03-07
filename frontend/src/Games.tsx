import React, { FunctionComponent, useState, useEffect } from 'react';
import GameList from './pages/game-list';
import GameDetails from './pages/game-detail';
import Auth from './pages/auth';
import Publisher from './pages/publishers';
import HomePage from './pages/home';
import PageNotFound from './pages/page-not-found';
import './public/css.css';
import { HiMoon } from "react-icons/hi2";
import { MdWbSunny } from "react-icons/md";
// React-17
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// React-18
import { BrowserRouter as Router, Routes , Route, Link} from 'react-route-dom';

const Games: FunctionComponent  = () => {
    // Dark Mode
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'bg-light bg-opacity-10'
    );
    const toggleTheme = () => {
        if (theme === 'bg-light bg-opacity-10') {
        setTheme('bg-dark');
    } else {
        setTheme('bg-light bg-opacity-10');
    }};
    const [users, setUsers] = useState(null);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        fetchUser();
    }, [theme]);


    async function fetchUser() {
        const response = await fetch ('http://localhost/senduser').then(response =>  response.json());
        console.log(response);

        };


    return (
        // <Router>
        //     <div className={theme}>
        //         {/* Barre de nav */}
        //         <nav className={`shadow border-bottom ${theme}`}>
        //             <div>
        //                 <Link to="/" className="brand-logo center text-warning">Home</Link>
        //                 <button className="mx-4 btn btn-outline-info" onClick={toggleTheme}>
        //                     {theme === 'bg-white' ? (<p><HiMoon/></p>) : (<p><MdWbSunny /></p>)
        //                 }</button>
        //             </div>
        //         </nav>
        //         <Switch>
        //             <Route exact path="/" component={GameList} />
        //             <Route exact path="/home" component={HomePage} />
        //             <Route exact path="/jeux" component={GameList} />
        //             <Route exact path="/jeux/:id" component={GameDetails} />
        //             <Route exact path="/publisher/:id" component={Publisher} />
        //             <Route exact path="/register" component={Auth} />
        //             <Route component={PageNotFound} />
        //         </Switch>
        //     </div>
        // </Router>
    
    // React-18
        <Router>
            <div className={theme}>
                {/* Barre de nav */}
                <nav className={`shadow border-bottom ${theme}`}>
                    <div>
                        <Link to="/" className="brand-logo center text-warning">Home</Link>
                        <button className="mx-4 btn btn-outline-info" onClick={toggleTheme}>
                            {theme === 'bg-white' ? (<p><HiMoon/></p>) : (<p><MdWbSunny /></p>)
                        }</button>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" component={GameList} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/jeux" component={GameList} />
                    <Route exact path="/jeux/:id" component={GameDetails} />
                    <Route exact path="/publisher/:id" component={Publisher} />
                    <Route exact path="/register" component={Auth} />
                    <Route component={PageNotFound} />
                </Routes>
            </div>
        </Router>
    );
}
export default Games;