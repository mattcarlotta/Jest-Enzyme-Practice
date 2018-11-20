import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import { appContainer } from './App.scss';

const App = ({ children }) => (
  <div data-test="app" className={appContainer}>
    <Header />
    {children}
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.node,
};
