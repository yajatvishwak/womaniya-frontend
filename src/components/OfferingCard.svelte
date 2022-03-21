<script>
  import { push } from "svelte-spa-router";
  export let imgURL = "";
  export let avatarURL = "";
  export let title = "";
  export let sellerName = "";
  export let price = "";
  export let oid = "";
  export let isAdmin = false;
</script>

<div class="w-full p-2 relative">
  {#if isAdmin}
    <div class="absolute top-5 right-5 bg-white p-3 rounded-3xl">
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
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        /></svg
      >
    </div>
  {/if}

  <img class="w-full rounded-4xl h-72 object-cover" src={imgURL} alt="" />
  <div class="px-5  w-full absolute bottom-5 left-0">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-2"
    >
      {#if !isAdmin}
        <div class="h-24 w-20">
          <img
            alt="seller"
            class="rounded-3xl w-full h-full object-cover"
            src={avatarURL}
          />
        </div>
      {/if}

      <div class={isAdmin ? "p-3" : ""}>
        <div class="text-xl font-bold">{title}</div>
        {#if !isAdmin}
          <div class="font-bold opacity-50">{sellerName}</div>
        {/if}
        <div class="font-bold text-primary-blue">{price}</div>
      </div>
      <div class="ml-auto" on:click={() => push("/offering/" + oid)}>
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
            d="M9 5l7 7-7 7"
          /></svg
        >
      </div>
    </div>
  </div>
</div>
