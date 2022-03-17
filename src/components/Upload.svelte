<script>
  let preview;
  export let file;
  function onChange(e) {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        preview = reader.result;
      },
      false
    );
    reader.readAsDataURL(e.target.files[0]);
  }
</script>

<div class="py-2">
  {#if preview === undefined || preview === null}
    <label
      for="upload"
      class="bg-white rounded-2xl p-4 flex items-center justify-center gap-3"
    >
      <div>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          /></svg
        >
      </div>
      <div>Upload Picture</div>
    </label>
    <input
      id="upload"
      bind:files={file}
      hidden
      on:change={onChange}
      type="file"
    />
  {:else}
    <div class="h-96">
      <img
        class="rounded-4xl h-full object-cover w-full"
        src={preview}
        alt=""
      />
    </div>
  {/if}
</div>
