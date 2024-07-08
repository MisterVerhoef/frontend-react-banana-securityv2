import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import authContext, {AuthContext} from "../context/AuthContext";

function SignIn() {
 const {isAuth, toggleIsAuth} = useContext(AuthContext);
 const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleIsAuth(true);
        navigate('/profile');
        console.log('Logged in');
    };


  return (
      <>
          <h1>Inloggen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
              molestias qui quo unde?</p>

          <form onSubmit={handleSubmit}>
              <p>*invoervelden*</p>
              <button type="submit">Inloggen</button>
          </form>

          <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
      </>
  );
}

export default SignIn;