import itemReducer from "./itemReducer"
import { combineReducers } from 'redux';

export default combineReducers({
    item: itemReducer
});