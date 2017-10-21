import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';
import Projects from '../containers/projects';
import Blogs from '../containers/blogs';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/projects">
      <Projects />
    </Route>
    <Route exact path="/blogs">
      <Blogs />
    </Route>
  </Switch>
);

export default Router;
