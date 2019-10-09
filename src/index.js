import "babel-polyfill"
import "offline-js"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import 'sanitize.css/sanitize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';

const props={
    store
}

ReactDOM.render(
    <Provider store={store}>
        <App {...props} />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
