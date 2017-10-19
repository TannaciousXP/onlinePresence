import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
