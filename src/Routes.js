import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';

const Routes = function () {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

const Container = styled.div`

`;

export default Routes;
