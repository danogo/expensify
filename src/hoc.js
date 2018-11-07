import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Here is the info: {props.info}</p>
  </div>
);

// Higher Order Component (HOC) - function that takes component(WrappedComponent) as an argument and returns other Enhanced Component(AdminInfo)
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && 'Privileged admin message, please do not share this private information!'}
      <WrappedComponent {...props} />
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated 
        ? <WrappedComponent {...props}/>
        : <p>Please sign in to see the Info </p>
      }
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'));