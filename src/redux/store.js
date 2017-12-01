import { createStore, applyMiddleware } from 'redux';

import reducers from 'redux/ducks';

const middleware = [];
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

export default store;
