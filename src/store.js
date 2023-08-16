import { createStore } from 'redux';

// Define initial state
const initialState = {
    isLoggedIn: false,
};

// Define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(reducer);

export default store;
