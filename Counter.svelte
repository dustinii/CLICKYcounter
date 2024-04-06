<script>
  import { useDispatch, useSelector } from 'react-redux';
  import store from '../store';
  import { interval } from 'svelte';

  let timerId;
  
  export let count;
  export let isAutoResetEnabled = false;
  
  const startTimer = () => {
  timerId = interval(() => {
    dispatch(store.dispatch(resetCounter()));
  }, 5000); // Reset every 5 seconds
};

const stopTimer = () => {
  if (timerId) {
    clearInterval(timerId);
  }
};

$: if (isAutoResetEnabled) {
  startTimer();
} else {
  stopTimer();
}
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-3xl font-bold mb-8">Clicky Counter</h1>
  <div class="text-5xl font-bold">{count}</div>
  <div class="text-sm mt-2">History:</div>
  <ul>
    {#each history as entry}
      <li>{entry}</li>
    {/each}
  </ul>
  <div class="flex mt-8 space-x-4">
    <button type="button" class="btn btn-primary" on:click={() => dispatch(store.dispatch(incrementCounter()))}>
      Increment
    </button>
    <button type="button" class="btn btn-secondary" on:click={() => dispatch(store.dispatch(resetCounter()))}>
      Reset
    </button>
    <button type="button" class="btn btn-accent" on:click={() => dispatch(store.dispatch(decrementCounter()))}>
      Decrement
    </button>
  </div>
</div>
<style>

</style>
