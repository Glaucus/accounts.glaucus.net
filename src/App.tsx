import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import RequestPage from './pages/request';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/request" component={RequestPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
