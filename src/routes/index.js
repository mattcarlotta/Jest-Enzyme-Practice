import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import Home from '../components/Home/Home';
import Counter from '../components/Counter/components/Counter';
import Jotto from '../components/Jotto/root';
import NotFound from '../components/NotFound/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="counter" component={Counter} />
    <Route path="jotto" component={Jotto} />
    <Route path="*" component={NotFound} />
  </Route>
);
