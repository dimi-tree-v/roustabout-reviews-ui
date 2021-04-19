import { createStore } from 'redux';
import { AuthenticationReducer } from '../reducers/authenticationReducer'

const store = createStore(
    AuthenticationReducer
)

export default store;