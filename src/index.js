import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from "redux";
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import burgerReducer from './store/reducers/burger'


const store = createStore(burgerReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
