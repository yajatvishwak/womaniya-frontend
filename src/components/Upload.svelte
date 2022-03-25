<script>
  export let fileURL;
  const client = filestack.init("AMw2N3rRKT1ASkuWqVGvQz");
  const options = {
    onUploadDone: (file) => {
      console.log(file);
      fileURL = file.filesUploaded[0].url;
    },
  };
</script>

<div class="py-2">
  <div
    class="bg-white rounded-2xl p-4 flex items-center justify-center gap-3"
    on:click={() => {
      client.picker(options).open();
    }}
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
    <div>Upload Offering Picture</div>
  </div>

  {#if fileURL}
    <div class="max-h-96 mt-5 w-full">
      <img src={fileURL} class="w-full object-cover" alt="" srcset="" />
    </div>
  {/if}
</div>
