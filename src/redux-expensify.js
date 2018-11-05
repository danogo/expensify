import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions
// ADD_EXPENSE
const addExpense = ({description= '', note = '', amount = 0, createdAt = 0} = {}) => (
  { type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => (
  {
    type: 'REMOVE_EXPENSE',
    expense: {
      id
    }
  }
);
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.expense.id);
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  expenses: expensesReducer, 
  filters: filtersReducer
});
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
})
// Dispatch returns action object we have dispatched, so we can save it and use it later
const expenseOne = store.dispatch(addExpense({description: 'my bills', amount: 400}));
const expenseTwo = store.dispatch(addExpense({description: 'witcher game', amount: 5400}));
console.log('expenseOne', expenseOne);
store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
  expenses: [
    {
      id: 'erjyrtmvop',
      description: 'November Rent',
      note: 'I had to pay $100 more this month because of bills',
      amount: 35500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // amount or date
    startDate: undefined,
    endDate: undefined
  }
};