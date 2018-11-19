import React from 'react';
import { browserHistory, Router } from 'react-router';
import routes from '../routes';

export default () => <Router history={browserHistory} routes={routes} />;
