import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, email });
    navigate('/profile');
  };

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Gebruikersnaam:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Voer je gebruikersnaam in"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">E-mailadres:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Voer je e-mailadres in"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Wachtwoord:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Voer je wachtwoord in"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;