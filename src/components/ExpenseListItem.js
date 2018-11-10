import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);

// here we connect just to get dispatch method to our WrappedComponent props
export default ExpenseListItem;