import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Nav from './components/Nav';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
