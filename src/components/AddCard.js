import React from 'react';

import './AddCard.css';

export class AddCard extends React.Component {
  state = {
    input: ''
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ input: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-card">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInput}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
