import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './rem/rem'
import './App.scss'
import './assets/css/font-awesome.min.css'
import App from './App';
import {Route,BrowserRouter} from 'react-router-dom'
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
        ,
 document.getElementById('root'));
 
