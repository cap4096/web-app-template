import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import actions from '../actions';
import reducers from '../reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    reducers,
    composeEnhancers(
        /*applyMiddleware(...middleware)*/));

export default store;
