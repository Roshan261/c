import {createStore, combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { taskManagerReducers } from './actions/reducers/taskManagerReducers'
const reducer = combineReducers({
    taskManager: taskManagerReducers
})

const middleware = [thunk];

const store = createStore(
    reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default store;