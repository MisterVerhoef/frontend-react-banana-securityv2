import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function Profile() {

    const {isAuth, user} = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/signin" />;
    }

  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
<p><strong>Gebruikersnaam:</strong> {user ? user.username : 'Not available'}</p>
<p><strong>Email:</strong> {user ? user.email : 'Not available'}</p>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;