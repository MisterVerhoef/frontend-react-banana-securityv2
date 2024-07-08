import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

        <form onSubmit={(e) => e.preventDefault()}>
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
  <button type="submit">Sign Up</button>
</form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;