import { createStore } from 'redux';
import reducer from './reducer';

const reduxDevtool = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(
  reducer, /* preloadedState, */
  reduxDevtool && reduxDevtool(),
);
