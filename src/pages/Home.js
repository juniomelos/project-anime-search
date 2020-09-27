import React, { useContext } from 'react';
import api from '../services/api';
import CardList from '../components/CardList';
import { UserContext } from '../context/UserContext';

function Home() {
  const { isLoading, setIsLoading, searched, setSearched, loadedList, setLoadedList } = useContext(
    UserContext,
  );
  const minLength = 3;

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearched(value.trimStart());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const response = await api.get(`/search/anime?q=${searched}&limit=16`);
    setLoadedList(response.data.results);
    setIsLoading(false);
  }

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              name="search"
              type="search"
              placeholder="Type anime name..."
              minLength={minLength}
              value={searched}
              onChange={handleSearchChange}
            />
            {isLoading ? (
              <div className="spinner-border text-warning"></div>
            ) : (
              <button
                type="submit"
                className="btn btn-outline-warning my-2 my-sm-0"
                disabled={searched.length < minLength}
              >
                Search
              </button>
            )}
          </div>
          <p className="form-text text-muted">Minimum 3 characters</p>
        </div>
      </form>
      <section className="section">
        <CardList list={loadedList} />
      </section>
    </section>
  );
}

export default Home;
