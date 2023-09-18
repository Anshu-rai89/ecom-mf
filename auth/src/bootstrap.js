import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

// Mount function to start up the app
const mount = (el, { onNavigate, createBrowserHistory }) => {
  const history = createBrowserHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    handleNavigate({ pathname: nextPathname }) {
     if (history.location.pathname !== nextPathname) {
       history.push(nextPathname);
     }
     
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { createBrowserHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
