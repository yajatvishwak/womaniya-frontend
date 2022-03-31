<script>
  import { fade } from "svelte/transition";
  export let price = "";
  export let cb = () => {};
  let value = 0;
  let slidedone = false;
  $: {
    if (value === 99) {
      cb();
      slidedone = true;
    }
  }
</script>

<div class="p-2">
  {#if slidedone}
    <div
      class="w-full bg-primary-blue text-center rounded-4xl p-4 text-white font-bold text-xl"
    >
      <div in:fade>Done 🥳</div>
    </div>
  {:else}
    <div class="w-full relative">
      <input class="slider" min="0" bind:value max="99" type="range" id="" />
      <div
        class={`absolute top-4 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl`}
      >
        {price}
      </div>
    </div>
  {/if}
</div>

<style>
  .slider {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    outline: none; /* Remove outline */
    @apply bg-primary-blue w-full p-2 rounded-4xl;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    @apply bg-white rounded-full w-6 h-6 p-6;
    background-image: url("/assets/right.svg");
    background-repeat: no-repeat;
    background-size: auto;
    background-size: 24px 24px;
    background-position: center;
  }
</style>
