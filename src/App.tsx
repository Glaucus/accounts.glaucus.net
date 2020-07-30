import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
