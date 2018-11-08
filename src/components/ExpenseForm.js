import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: ''
  };
  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  handleAmountChange = e => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };
  handleNoteChange = e => {
    const note = e.target.value;
    if (note.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ note }));
    }
  };
  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <textarea 
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.handleNoteChange}
          />
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}