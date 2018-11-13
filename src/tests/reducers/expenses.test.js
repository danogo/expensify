import expensesReducer from '../../reducers/expenses';
import mockExpenses from '../fixtures/expenses';

test('should return default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: mockExpenses[1].id
  };
  const state = expensesReducer(mockExpenses, action);
  expect(state).toEqual([mockExpenses[0], mockExpenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(mockExpenses, action);
  expect(state).toEqual(mockExpenses);
});

test('should add expense with provided values', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '123abc',
      description: 'rent',
      note: 'rent for my room',
      amount: 1337,
      createdAt: 9000
    }
  };
  const state = expensesReducer(mockExpenses, action);
  expect(state).toEqual([...mockExpenses, action.expense]);
});

test('should edit expense with provided id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: mockExpenses[0].id,
    updates: {
      note: 'my food'
    }
  };
  const state = expensesReducer(mockExpenses, action);
  expect(state).toEqual([{...mockExpenses[0], ...action.updates}, mockExpenses[1], mockExpenses[2]]);
});

test('should not edit expenses if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      note: 'my food'
    }
  };
  const state = expensesReducer(mockExpenses, action);
  expect(state).toEqual(mockExpenses);
});