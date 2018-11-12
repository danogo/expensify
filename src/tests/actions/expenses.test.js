import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should return remove expense action object', () => {
  const action = removeExpense('123superid');
  expect(action).toEqual( {
    type: 'REMOVE_EXPENSE',
    id: '123superid'
  })
});

test('should return edit expense action object', () => {
  const action = editExpense('123superid', { note: 'some test note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123superid',
    updates: { note: 'some test note' }
  })
});

test('should setup add expense action object with provided values', () => {
  const dataObject = {
    description: 'Rent', 
    note: 'awesome note', 
    amount: 2500, 
    createdAt: 1000
  };
  const action = addExpense(dataObject);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...dataObject
    }
  })
});

test('should setup default add expense action object when no values provided', () => {
  const defaultData = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...defaultData
    }
  })
})