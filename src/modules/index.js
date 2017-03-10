import {reducer as formReducer} from 'redux-form'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise'

import Contact from './Contact'

const rootReducer = combineReducers({
    Contact,
    form : formReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)
