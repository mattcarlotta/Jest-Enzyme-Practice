import React, { Component } from 'react';
import { counterError } from './counter.scss';

export default class Home extends Component {
  state = {
    counter: 0,
    error: '',
  };

  handleIncrementClick = () =>
    this.setState(prevState => ({ counter: prevState.counter + 1, error: '' }));

  handleDecrementClick = () =>
    this.setState(prevState => {
      const counter = prevState.counter - 1;
      return counter < 0
        ? { counter: 0, error: "The counter can't go below 0!" }
        : { counter };
    });

  render = () => (
    <div data-test="component-counter">
      <h1 data-test="counter-display">
        The counter is currently {this.state.counter}
      </h1>
      <div data-test="counter-error" className={counterError}>
        {this.state.error}
      </div>
      <button
        data-test="increment-button"
        className="uk-button uk-button-primary"
        onClick={this.handleIncrementClick}
        type="button"
        style={{ marginRight: 20 }}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        className="uk-button uk-button-danger"
        onClick={this.handleDecrementClick}
        type="button"
      >
        Decrement counter
      </button>
    </div>
  );
}
