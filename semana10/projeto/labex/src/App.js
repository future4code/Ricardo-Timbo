import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import FormPage from './Components/FormPage';
import AdminPage from './Components/AdminPage';
import CreateTripPage from './Components/CreatTripPage'
import DetailTripPage from './Components/DetailTripPage'
import ListTripPage from './Components/ListTripPage'
import styled from "styled-components";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/viagens/criar">
            <CreateTripPage />
          </Route>
          <Route exact path="/viagens/detalhe">
            <DetailTripPage />
          </Route>
          <Route exact path="/viagens">
            <ListTripPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/inscricao">
            <FormPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage/>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
