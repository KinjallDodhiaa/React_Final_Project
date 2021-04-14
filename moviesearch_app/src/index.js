import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import reducers from "./reducer";

import Navbar from "./components/navbar.js";
import Home from "./pages/home";
import Search from "./pages/search";
import Movies from "./pages/movies";
import Series from "./pages/series";

const App = () => {


  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
      </Switch>
    </Router>
  );
};

    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/series">
                    <Series />
                </Route>
            </Switch>
        </Router>
    );

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById("root")
);