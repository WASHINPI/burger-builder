import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import burgerReducer from './store/reducers/burger'



axios.defaults.baseURL = 'https://todo-app-dev-by-washi.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(burgerReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
