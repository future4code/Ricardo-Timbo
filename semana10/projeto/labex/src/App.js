import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import FormPage from './Components/FormPage';
import AdminPage from './Components/AdminPage';


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
        <Route exact path="/admin">
          <AdminPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
