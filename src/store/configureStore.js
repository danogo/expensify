import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// function that creates store using redux and returns it
export default () => {
  // Store creation
  const rootReducer = combineReducers({
    expenses: expensesReducer, 
    filters: filtersReducer
  });

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() as second arg allows to use redux dev tools
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}
