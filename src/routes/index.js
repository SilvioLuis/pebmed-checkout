import React from 'react';
import history from './history';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import { Container } from 'react-bootstrap';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

const RouterApp = () => {
  return (
    <Router history={history}>
      <Container className="pb-5">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Container>
    </Router>
  );
};

export default RouterApp;
