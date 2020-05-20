import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import FormPage from './Components/FormPage';


const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
