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

test('should handle dates change', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: filters.startDate, endDate: filters.endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort change to amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount'}
  });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('should handle sort change to date', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'date'}
  });
  expect(sortByDate).toHaveBeenCalledTimes(1);
});

test('should hande calendar focus change', () => {
  const calendarFocused = 'startDate' // from DateRangePicker docs: calendarFocused can have 3 values: null, 'startDate' or 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});