/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import api from '../services/api';

const useLoadData = () => {
  const { setError, setRecommendations, setAnime, setIsLoading } = useContext(UserContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      try {
        const responseAnime = await api.get(`/anime/${id}`);
        setAnime(responseAnime.data);

        const responseRecommendations = await api.get(`/anime/${id}/recommendations`);
        setRecommendations(responseRecommendations.data.recommendations);
        setIsLoading(true);
      } catch (e) {
        setError(e.message);
        history.push('/');
      }
    }
    loadData();

    return () => setIsLoading(false);
  }, [id, setIsLoading]);
};

export default useLoadData;
