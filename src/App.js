import React, { Fragment, useEffect } from 'react';
import Login from './components/layout/Login';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Initialize materialize js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Login />
      </Fragment>
    </Provider>
  );
};

export default App;
