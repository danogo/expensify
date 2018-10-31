import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  // Router expects to have either 0 or 1 children
  // Switch renders component for first match and doesnt go through the rest of routes to check if they match, so we get our 404 page only if none of the previous routes match
  // exact forces the exact match, so paths which only start with slash won't match
  <Router>
    <Switch>
      <Route path='/' exact component={ExpenseDashboardPage} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);


ReactDOM.render(routes, document.getElementById('app'));