import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.description}</h3>
    <p>Amount: {props.amount}</p>
    <p>Created at: {props.createdAt}</p>
  </div>
);

export default ExpenseListItem;