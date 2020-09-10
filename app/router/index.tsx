/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes.json';
import App from '../containers/App';

import Menu from '../components/menu';
import HomePage from '../views/Home/Home';
import ParsePage from '../views/Parse/Parse';

// Lazily load routes and code split with webpack
const LazySetPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ '../views/Set/Set')
);

const SetPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazySetPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Menu />
      <Switch>
        <Route path={routes.Parse} component={ParsePage} />
        <Route path={routes.Set} component={SetPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
