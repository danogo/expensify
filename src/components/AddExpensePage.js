import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = props => (
  <div>
    <h1>Add expense</h1>
    <ExpenseForm 
      onSubmit={expense => {
        // props.dispatch(addExpense(expense));
        props.onSubmit(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expense => {
      dispatch(addExpense(expense));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);