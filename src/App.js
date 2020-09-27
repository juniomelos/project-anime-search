import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './routes';
import Nav from './components/Nav';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <HashRouter basename="/">
      <BrowserRouter>
        <UserProvider>
          <Nav />
          <Routes />
        </UserProvider>
      </BrowserRouter>
    </HashRouter>
  );
}

export default App;
