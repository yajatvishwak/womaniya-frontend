<script>
  import { push } from "svelte-spa-router";

  export let avatarURL = "";
  export let name = "";
  export let skill = "";
  export let sellerID = "";
</script>

<div class="flex  flex-col bg-white p-5 rounded-xl">
  <div class="max-h-52">
    <img src={avatarURL} class=" h-full rounded-full" alt="" />
  </div>
  <div class="my-5">
    <div class="font-bold text-2xl">{name}</div>
    <div class="opacity-50">can provide value in {skill}</div>
  </div>
  <div
    on:click={() => push("/profile/" + sellerID)}
    class="rounded-full py-2 border-2  transition-all hover:bg-purple-50 px-4 w-full text-center"
  >
    ⚡ Connect
  </div>
</div>
