import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

test('should set text to provided value', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' });
  expect(state.text).toBe('rent');
});

test('should set startDate to provided value', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: moment().startOf('month') });
  expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set endDate to provided value', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: moment().endOf('month') });
  expect(state.endDate).toEqual(moment().endOf('month'));
});