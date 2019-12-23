import {combineReducers} from 'redux'

const container = (state=0, action) => {
    switch (action.type) {
        case 'ADD':
            return state +1
        case 'SUBSTRACT':
            return state -1
        default:
            return state
    }
}

const user = (state={}, action) => {
    switch (action.type) {
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload}
        case 'UPDATE_PASSWORD':
            return {...state, password: action.payload}

        default:
            return state
    }
}
const rootReducer = combineReducers({
    container,
    user
})

export default rootReducer