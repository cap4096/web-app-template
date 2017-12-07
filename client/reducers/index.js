import { combineReducers } from 'redux';
import counterReducer from './counterReducer.js';

export default combineReducers({
    counterReducer : counterReducer
});

