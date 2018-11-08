import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  handleNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  handleDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  
  handleCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount for the expense.'}));
    } else {
      this.setState(() => ({ error: ''}));
      // valueOf to get timestamp in milliseconds from moment object
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
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
          <SingleDatePicker
            date={this.state.createdAt} 
            onDateChange={this.handleDateChange} 
            focused={this.state.calendarFocused} 
            onFocusChange={this.handleCalendarFocusChange} 
            id="calendar"
            numberOfMonths={1}
            isOutsideRange={() => false}
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