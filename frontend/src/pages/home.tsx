import React, { FunctionComponent, useState, useEffect } from 'react';
import '../public/css.css';
// React-17
// import { useHistory } from 'react-router-dom';
// React-18
import { useNavigate } from 'react-router-dom';



const HomePage: FunctionComponent<RouteComponentProps> = () => {

    // React-17
    // const history = useHistory();

    // React-18
    const navigate = useNavigate();


    useEffect(() => {},[]);


      return (
<div>
    Coucou
</div>
      );
}

export default HomePage;