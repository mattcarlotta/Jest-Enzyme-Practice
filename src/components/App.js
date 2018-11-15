import React from 'react';
import PropTypes from 'prop-types';
import { appContainer } from './App.scss';

const App = ({ children }) => <div className={appContainer}>{children}</div>;

export default App;

App.propTypes = {
  children: PropTypes.node,
};
