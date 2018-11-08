import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, dispatch, id}) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
    <button onClick={(e) => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
  </div>
);

// here we connect just to get dispatch method to our WrappedComponent props
export default connect()(ExpenseListItem);