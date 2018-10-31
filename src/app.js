import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component
  </div>
);

// Link component prevents from full page reload using client side rendering instead of server side rendering, like simple anchor does. It uses js to force reactDOM render, and then using router displays component whose 'path' matches 'to' path provided in the Link component. 
const NotFoundPage = () => (
  <div>
    404! - <Link to='/'>Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
);

const routes = (
  // Router expects to have either 0 or 1 children
  // Switch renders component for first match and doesnt go through the rest of routes to check if they match, so we get our 404 page only if none of the previous routes match (without Switch Route without path would match every other path too)
  // exact forces the exact match, so paths which only start with slash won't match
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={ExpenseDashboardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routes, document.getElementById('app'));