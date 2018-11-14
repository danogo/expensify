import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import mockExpenses from '../fixtures/expenses';

test('should render ExpenseForm with default data correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with provided data correctly', () => {
  const wrapper = shallow(<ExpenseForm expense={mockExpenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});