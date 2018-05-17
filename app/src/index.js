import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

export const history = createHistory()
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();