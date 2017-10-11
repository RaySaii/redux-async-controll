import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {movies, pictures, todos} from '../reducers/index';
import DevTools from "../DevTools";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import rootSaga from "../sagas/index";
const logger = createLogger({
    collapse:true
});
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware,logger)

const enhancer = compose(middleware, DevTools.instrument())

export const store = createStore(
    combineReducers({
        todos, movies, pictures
    }),
    enhancer)
sagaMiddleware.run(rootSaga);
