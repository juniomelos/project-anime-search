import React from 'react';
import NotFoundImage from '../assets/not-found.png';
import '../App.css';

function NotFound() {
  return (
    <section className="img-notFound">
      <div>
        <img src={NotFoundImage} alt="Page not found" />
      </div>
    </section>
  );
}

export default NotFound;
