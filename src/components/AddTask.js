import React from 'react';

import { connect } from 'react-redux';

import './AddTask.css';
import { addTask } from '../redux/actions';

class AddCard extends React.Component {
  state = {
    input: ''
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.input);
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
        <button type="submit" disabled={!this.state.input}>
          Add
        </button>
      </form>
    );
  }
}

export default connect(null, { addTask })(AddCard);
