import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
// import { Container } from './styles';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/" component={Repository} exact />
  </Switch>
);

export default Routes;
