import React, { Fragment, useEffect } from 'react';
import Login from './components/layout/Login';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Initialize materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

export default App;
