import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/banana-01.png';


function NavBar() {
  const navigate = useNavigate();
  const { isAuth, toggleIsAuth } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo"/>
          <h3>
            Banana Security
          </h3>
        </span>
      </Link>

      <div>
        {isAuth ? (
          <>
            <button
              type="button"
              onClick={() => navigate('/profile')}
            >
              Profiel
            </button>
            <button
              type="button"
              onClick={() => {
                toggleIsAuth(false);
                navigate('/');
              }}
            >
              Log uit
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => navigate('/signin')}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
            >
              Registreren
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;