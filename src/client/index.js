import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import configureStore from '../client/store/index'
import App from './app';
import './index.css'

const store = configureStore()
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'))

