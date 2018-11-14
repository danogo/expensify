import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import mockExpenses from '../fixtures/expenses';

let wrapper, addExpense, history;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(mockExpenses[2]);
  expect(addExpense).toHaveBeenLastCalledWith(mockExpenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});