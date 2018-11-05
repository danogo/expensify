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
const editExpense = (id, updates) => (
  {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
);

// SET_TEXT_FILTER
const setTextFilter = (text = '') => (
  {
    type: 'SET_TEXT_FILTER',
    text
  }
);
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
    case 'EDIT_EXPENSE':
      return state.map(expense => ({...expense, ...action.updates}));
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
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  expenses: expensesReducer, 
  filters: filtersReducer
});
const store = createStore(rootReducer);

// run this function everytime actions is dispatched and state changes
store.subscribe(() => {
  console.log(store.getState());
});
// Dispatch returns action object we have dispatched, so we can save it and use it later
const expenseOne = store.dispatch(addExpense({description: 'my bills', amount: 400}));
const expenseTwo = store.dispatch(addExpense({description: 'witcher game', amount: 9000}));
console.log('expenseOne', expenseOne);
store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 1337}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

const user = {
  name: 'Ciri',
  age: 50
};

const user2 = Object.assign({}, user, {name: 'Bob'});
const user3 = { ...user, age: 15};
console.log('============= Spread Operator =================');
console.log('user: ', user);
console.log('user2: ', user2);
console.log('user3: ', user3);