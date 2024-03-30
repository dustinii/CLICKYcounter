import { createStore } from 'redux';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'RESET':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;