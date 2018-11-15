import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount;
beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  const props = { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, filters };
  wrapper = shallow(<ExpenseListFilters {...props}/>)
})

test('should render ExpenseListFilters component with default data correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters component with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});
