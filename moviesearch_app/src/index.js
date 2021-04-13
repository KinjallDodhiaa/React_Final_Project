import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { Router, Switch, Route } from "react-router";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import './style.css';


import reducers from "./reducer";

import Menu from './components/menu';
import HomePage from "./pages/homepage";




//Connecting   people with fun and entertainment

const App = () => {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          
        </Switch>
      </Router>
    );
};

ReactDOM.render(
<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
</Provider>, document.getElementById('root'))