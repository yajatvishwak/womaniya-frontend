<script>
  export let text = "";
  export let placeholder = "";
  export let isPass = false;
</script>

<div class=" py-2 ">
  {#if isPass}
    <input
      bind:value={text}
      type="password"
      class=" input w-full text-xl font-bold  text-primary-blue"
      {placeholder}
    />
  {:else}
    <input
      bind:value={text}
      class=" input w-full text-xl font-bold   text-primary-blue"
      type="text"
      {placeholder}
    />
  {/if}
</div>
