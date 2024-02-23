import { createStore } from 'redux';
import pinActions from './action/pinActions';

const store = createStore(pinActions);

export default store;
