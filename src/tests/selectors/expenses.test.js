import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const mockExpenses = [
  {
    id: 1,
    description: 'Food',
    note: '',
    amount: 34500,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Rent',
    note: 'bill for one month',
    amount: 734500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 3,
    description: 'Book',
    note: '12 rules of life',
    amount: 13370,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]

test('should filter by text value', () => {
  const mockFilters = {
    text: 'oo',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(mockExpenses, mockFilters);
  expect(result).toEqual([mockExpenses[2], mockExpenses[0]]);
});

test('should filter by startDate value', () => {
  const mockFilters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(mockExpenses, mockFilters);
  expect(result).toEqual([mockExpenses[2], mockExpenses[0]]);
});

test('should filter by endDate value', () => {
  const mockFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(3, 'days')
  }
  const result = selectExpenses(mockExpenses, mockFilters);
  expect(result).toEqual([mockExpenses[0], mockExpenses[1]]);
});

test('should sort by date, from the most present to the most past', () => {
  const mockFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(mockExpenses, mockFilters);
  expect(result).toEqual([mockExpenses[2], mockExpenses[0], mockExpenses[1]]);
});

test('should sort by amount, form the biggest to the least', () => {
  const mockFilters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(mockExpenses, mockFilters);
  expect(result).toEqual([mockExpenses[1], mockExpenses[0], mockExpenses[2]]);
})