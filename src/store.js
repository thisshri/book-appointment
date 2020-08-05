import { createStore } from 'redux';
import { combineReducers, install } from 'redux-loop';

import { appointments } from './reducers';

const reducer = combineReducers({
    appointments
});

const store = createStore(reducer, {}, install());

export default store;
