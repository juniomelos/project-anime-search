import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Card({ id, title, image_url }) {
  const history = useHistory();

  function handleNavigateToDetail() {
    history.push(`/details/${id}`);
  }

  return (
    <div className="card2">
      <article className="card">
        <figure>
          <img
            className="card-img-top"
            style={{ cursor: 'pointer' }}
            src={image_url}
            alt={title}
            onClick={handleNavigateToDetail}
          />
        </figure>
        <div className="card-body">
          <p className="card-title">{title}</p>
        </div>
      </article>
    </div>
  );
}

export default Card;
