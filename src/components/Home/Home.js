import React from 'react';
import { title } from './home.scss';

const Home = () => (
  <div data-test="component-home">
    <div className={title}>
      <h1>Counter Component</h1>
      <p>A simple application to increase a counter from 0</p>
    </div>
    <div className={title}>
      <h1>Jotto</h1>
      <p>A guessing word game</p>
    </div>
  </div>
);

export default Home;
