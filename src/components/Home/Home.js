import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div data-test="component-home">
    <Link to="/counter">Counter Component</Link>
    <br />
    <Link to="/jotto">Jotto Game</Link>
  </div>
);

export default Home;
