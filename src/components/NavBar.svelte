<script>
  import { push } from "svelte-spa-router";

  import { fade } from "svelte/transition";
  let isopen = false;
</script>

{#if isopen}
  <div
    in:fade
    class="min-h-screen fixed z-30 top-0 flex flex-col justify-between left-0 w-full bg-fuchsia-100 p-4"
  >
    <div>
      <div class="" on:click={() => (isopen = !isopen)}>❌</div>
      <div class="text-3xl mt-10 font-semibold mb-4">Navigate To</div>
      <div class="flex justify-center items-center flex-col gap-3">
        <div
          on:click={() => {
            push("/home");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center  text-xl text-fuchsia-500"
        >
          Home
        </div>
        <div
          on:click={() => {
            push("/profile");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center  text-xl text-fuchsia-500"
        >
          Profile
        </div>
        <div
          on:click={() => {
            push("/awaiting-orders");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center  text-xl text-fuchsia-500"
        >
          Your Offering Orders
        </div>
        <div
          on:click={() => {
            push("/previous-orders");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center  text-xl text-fuchsia-500"
        >
          Your Orders
        </div>
      </div>
    </div>
    <div
      on:click={() => (window.location.href = "https://about.pickforest.me")}
      class="mt-  flex justify-between items-center"
    >
      <div class="text-3xl opacity-50 text-primary-blue font-bold">
        Womanify
      </div>
      <div class="opacity-50">
        <div>made with ❤️ and ☕</div>
        <div>product of 4 Coders</div>
      </div>
    </div>
  </div>
{/if}

<div class="p-2">
  <div class="flex items-center justify-between">
    <img src="assets/logo.png" alt="" />
    <div on:click={() => (isopen = !isopen)} for="my-drawer">
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
          d="M4 6h16M4 12h16m-7 6h7"
        /></svg
      >
    </div>
  </div>
</div>
