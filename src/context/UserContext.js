import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searched, setSearched] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadedList, setLoadedList] = useState([]);
  const [error, setError] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [anime, setAnime] = useState([]);

  const context = {
    searched,
    setSearched,
    isLoading,
    setIsLoading,
    loadedList,
    setLoadedList,
    error,
    setError,
    recommendations,
    setRecommendations,
    anime,
    setAnime,
  };

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};
