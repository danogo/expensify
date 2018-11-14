import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import mockExpenses from '../fixtures/expenses';

let wrapper, onSubmit, history;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(mockExpenses[2]);
  expect(onSubmit).toHaveBeenLastCalledWith(mockExpenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});