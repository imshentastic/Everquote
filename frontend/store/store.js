import logger from 'redux-logger';
import {thunk} from '../middleware/thunk';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import {createStore, applyMiddleware} from 'redux';

const configureStore = (preloadedState = {}) => createStore(
    rootReducer, preloadedState, applyMiddleware(thunk, logger)
);

export default configureStore;