import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
