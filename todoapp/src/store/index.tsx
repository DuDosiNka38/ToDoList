import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { WatcherTask } from '../asycSaga/asyc';
import { TaskReducer } from './ListTaskReducer';



const SagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ 
    Task: TaskReducer
 })

export const store = createStore(rootReducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(WatcherTask)

export type RootState = ReturnType<typeof rootReducer>