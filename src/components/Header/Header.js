import React from 'react';
import { Link } from 'react-router';
import { link, navContainer } from './Header.scss';

export default () => (
  <nav className={navContainer}>
    <Link className={link} to="/counter">
      Counter
    </Link>
    <Link className={link} to="/jotto">
      Jotto
    </Link>
  </nav>
);
