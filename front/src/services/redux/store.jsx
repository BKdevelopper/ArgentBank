import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { signinReducer } from '../redux/reducers/currentUser'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(signinReducer, composedEnhancer)
// store.subscribe(() => {
//   console.log('store', store.getState())
// })
export default store
