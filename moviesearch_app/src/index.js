import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducers from "./reducers";



const App = () => {
    return (
        <div>
            
        </div>
    );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
</Provider>, document.getElementById('root'))