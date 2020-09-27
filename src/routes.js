import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route path="/project-anime-search/" exact component={Home} />
      <Route path="/project-anime-search/details/:id" component={Details} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
