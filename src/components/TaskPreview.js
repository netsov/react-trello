import React from 'react';
import { connect } from 'react-redux';

import './Board.css';
import { ALL } from '../boards';
import { updateTask } from '../redux/actions';

class TaskPreview extends React.Component {
  state = {
    selected: null
  };
  componentWillReceiveProps({ selected }) {
    this.setState({ selected });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateTask(this.state.selected);
  };
  render() {
    const { selected } = this.state;
    if (!selected) return null;
    return (
      <div className="board">
        <h4>Preview & Edit</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Title&nbsp;
            <input
              type="text"
              value={selected.title}
              onChange={e =>
                this.setState({
                  selected: { ...selected, title: e.target.value }
                })
              }
            />
          </label>

          <label htmlFor="">
            Board&nbsp;
            <select
              value={selected.board}
              onChange={e =>
                this.setState({
                  selected: { ...selected, board: e.target.value }
                })
              }
            >
              {ALL.map(board => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Apply changes</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ selected }) => ({
  selected
});

export default connect(mapStateToProps, { updateTask })(TaskPreview);
