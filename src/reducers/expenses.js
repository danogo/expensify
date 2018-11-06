// Reducers
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.expense.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => ({...expense, ...action.updates}));
    default:
      return state;
  }
}