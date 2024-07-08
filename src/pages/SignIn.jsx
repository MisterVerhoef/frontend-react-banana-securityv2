import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function SignIn() {
 // const {isAuth, toggleIsAuth} = useContext(AuthContext);
 const navigate = useNavigate();
 const {login} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username: 'user_entered_username', email: 'user_entered_email' });
        navigate('/profile');
        console.log('Logged in');
    };


  return (
      <>
          <h1>Inloggen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
              molestias qui quo unde?</p>

         <form onSubmit={handleSubmit}>
  <label htmlFor="username">Gebruikersnaam:</label>
  <input
    type="text"
    id="username"
    name="username"
    placeholder="Voer je gebruikersnaam in"
  />
  <label htmlFor="password">Wachtwoord:</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Voer je wachtwoord in"
  />
  <button type="submit">Inloggen</button>
</form>

          <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
      </>
  );
}

export default SignIn;