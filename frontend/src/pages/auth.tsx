import React, { useState, useEffect } from 'react';

function Auth() {
    
    useEffect(() => {}, []);


    return (
    <div className="mx-4 justify-content-md-center bg-white">
        <form className=" text-primary" method="POST" action="http://localhost/users/">
            <div className="form-group">
                <label htmlFor="name" id="name">Pseudo</label>
                <input type="text" name="name" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email" id="email">Mail</label>
                <input type="email" name="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="image_path" id="image_path">Mail</label>
                <input type="text" name="image_path" id="image_path" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password" id="password">MDP</label>
                <input type="password" name="password" id="password" className="form-control" />
            </div>
            <button type="submit">Valider</button>
        </form>
    </div>
    )

}
export default Auth;
