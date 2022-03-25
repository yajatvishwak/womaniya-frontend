<script>
  export let text = "";
  export let placeholder = "";
</script>

<div class="py-2 ">
  <textarea
    {placeholder}
    rows="10"
    bind:value={text}
    class="rounded-4xl w-full text-xl bg-white p-5"
  />
</div>
