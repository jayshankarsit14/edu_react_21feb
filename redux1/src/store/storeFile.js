import {createStore} from 'redux';
import reducer from '../reducer/MainReducer';

// we are connecting store to reducer
let store = createStore(reducer);

export default store;