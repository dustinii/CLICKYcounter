export const incrementCounter = () => ({
  type: 'INCREMENT',
});

const decrementCounter = () => ({
  type: 'DECREMENT',
});

export const resetCounter = () => ({
  type: 'RESET',
  payload: Math.floor(Math.random() * 10) + 1,
});
