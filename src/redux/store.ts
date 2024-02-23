import { createStore, applyMiddleware } from 'redux';
import pinActions from './action/pinActions';
import thunk from 'redux-thunk';

const store = createStore(pinActions, applyMiddleware(thunk));

export default store;
