import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Result from './pages/Result';
import Watch from './pages/Watch';

const Routes = function () {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/results/:query" component={Result} />
      <Route exact path="/watch" component={Watch} />
    </Switch>
  );
};

export default Routes;
