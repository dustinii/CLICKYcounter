<script>
  import { useDispatch, useSelector } from 'react-redux';
  import store from '../store';

  export let count;
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-3xl font-bold mb-8">Clicky Counter</h1>
  <div class="text-5xl font-bold">{count}</div>
  <div class="flex mt-8 space-x-4">
    <button type="button" class="btn btn-primary" on:click={() => dispatch(store.dispatch(incrementCounter()))}>
      Increment
    </button>
    <button type="button" class="btn btn-secondary" on:click={() => dispatch(store.dispatch(resetCounter()))}>
      Reset
    </button>
  </div>
</div>

<style>

</style>
