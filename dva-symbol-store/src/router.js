import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Symbols from './routes/Symbols';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Symbols} />
        <Route path="/symbols" exact component={Symbols} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
