import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

// exporting unconnected component for testing
export class AddExpensePage extends Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => {
      dispatch(addExpense(expense));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);