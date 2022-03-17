<script>
  export let text = "";
  export let red = false;
</script>

{#if red}
  <div class="py-2">
    <div class="btn bg-red-200 border-none w-full">
      <span class="text-red-500">{text}</span>
    </div>
  </div>
{:else}
  <div class="py-2">
    <div
      class="btn bg-primary-blue-100 border-none hover:bg-primary-blue-100 w-full"
    >
      <span class="text-primary-blue">{text}</span>
    </div>
  </div>
{/if}
