import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

const appStore = createStore(todoReducer);

export default appStore;