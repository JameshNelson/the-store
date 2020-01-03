import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import promiseMiddleware from 'redux-promise-middleware'; 
import authReducer from './authReducer'; 
import productsReducer from './productsReducer'; 

let rootReducer = combineReducers({products: productsReducer, auth: authReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); 