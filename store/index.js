import { createStore } from 'redux';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return { ...state, count: state.count + 1, history: [state.count, ...state.history.slice(0, 4)] }; // Limit history length to 4
  case 'DECEREMENT':
    return {...state, count: Math.max(0, state.count - 1)};
  case 'RESET':
    return { ...state, count: action.payload, history: [action.payload] };
  default:
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
