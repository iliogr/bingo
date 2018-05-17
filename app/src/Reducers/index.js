import { combineReducers } from 'redux';
import bingoReducer from './bingoReducer';

const rootReducer = combineReducers({
    bingoReducer: bingoReducer
})

export default rootReducer;
