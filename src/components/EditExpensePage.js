import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
  handleSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  handleClick = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.psuh('/');
  }

  render() {
    return (
      <div>
      <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.handleSubmit}
      />
      <button onClick={this.handleClick}>Remove</button>
    </div>
    );
  }
}

// props are current available props, we are adding another prop from state
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: id => dispatch(removeExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);