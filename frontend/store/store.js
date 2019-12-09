import logger from 'redux-logger';
import {thunk} from '../middleware/thunk';
import rootReducer from './reducers/root_reducer';
import {createStore, applyMiddleware} from 'redux';

export default (preloadedState = {}) => createStore(
    rootReducer, preloadedState, applyMiddleware(thunk, logger)
);
