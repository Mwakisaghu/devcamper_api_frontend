import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CreateBootcampForm from './components/bootcamps/CreateBootcampForm';
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/create" element={<CreateBootcampForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
