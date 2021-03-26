import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import main from './main'

const reducers = combineReducers({
    main
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store