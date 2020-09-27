import React from 'react';
import search from '../assets/search.svg';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Nav() {
  const history = useHistory();

  function handleBack() {
    history.goBack('/');
  }

  return (
    <nav className="corpo-pesquisa">
      <div className="navbar navbar bg">
        <div>
          <h1 className="abc">
            <i>Anime Search</i> <img src={search} className="img-search" alt="search" />
          </h1>
        </div>
        <button onClick={handleBack} className="btn btn-warning">
          Back
        </button>
      </div>
    </nav>
  );
}

export default Nav;
