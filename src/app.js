import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

const routes = (
  <Router>
    <div>
      <Route path='/' exact component={ExpenseDashboardPage}/>
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </Router>
);


ReactDOM.render(routes, document.getElementById('app'));