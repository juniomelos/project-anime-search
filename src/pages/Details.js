import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Player from 'react-player/lazy';
import CardList from '../components/CardList';
import useLoadData from '../hooks/animeHooks';
import '../App.css';

function Details() {
  const { recommendations, anime, isLoading } = useContext(UserContext);

  useLoadData();

  return (
    <section>
      {!isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-info" />
          <div className="spinner-grow text-danger loadingDetails" />
          <div className="spinner-grow text-success" />
        </div>
      ) : (
        <article>
          <header className="list">
            <img src={anime.image_url} alt={anime.title} />
            <div className="textWhite loadingDetails">
              <hgroup>
                <h1>{anime.title}</h1>
                <h2>{`${anime.title_english}`}</h2>
              </hgroup>
              <div>
                <p>
                  Status: &nbsp;
                  <span>{anime.status}</span>
                </p>
                <p>Total episodes: {anime.episodes}</p>
                <div className="list">
                  <p>Genres:</p>
                  <ul className="list-genre ">
                    {anime.genres.map((genre) => (
                      <div className="list-genre-li">
                        <li key={genre.mal_id}>{genre.name}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <section className="textWhite">
            <h3>Synopsis</h3>
            <p>{anime.synopsis}</p>
          </section>
          <section>
            <Player url={anime.trailer_url} controls />
          </section>
          <section>
            <h3 className="textWhite">Recommendations</h3>
            <CardList list={recommendations} />
          </section>
        </article>
      )}
    </section>
  );
}

export default Details;
