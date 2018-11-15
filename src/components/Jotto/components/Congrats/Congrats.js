import React from 'react';
import PropTypes from 'prop-types';
/**
 * Functional react component for congratulatory message
 * @function
 * @param {string} success - React string prop
 * @returns {JSX.Element} - Rendered component (or null)
 */
const Congrats = ({ success }) =>
  success ? (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : null;

export default Congrats;

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
