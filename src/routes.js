import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
