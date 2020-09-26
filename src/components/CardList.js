import React from 'react';
import Card from './Card';
import '../App.css';

function CardList({ list }) {
  return (
    <ul className="card-list">
      {list.map((item) => (
        <li key={item.mal_id}>
          <Card id={item.mal_id} title={item.title} image_url={item.image_url} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
