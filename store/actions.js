export const incrementCounter = () => ({
  type: 'INCREMENT',
});

export const resetCounter = () => ({
  type: 'RESET',
  payload: Math.floor(Math.random() * 10) + 1,
});
