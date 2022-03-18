<script>
  import { push } from "svelte-spa-router";

  export let imgURL = "";
  export let avatarURL = "";
  export let title = "";
  export let sellerName = "";
  export let price = "";
  export let oID = "";
</script>

<div class="w-full p-2 relative">
  <img class="w-full rounded-4xl h-72 object-cover" src={imgURL} alt="" />
  <div class="px-5  w-full absolute bottom-5 left-0">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-2"
    >
      <div class="h-24 w-20">
        <img
          alt="seller"
          class="rounded-3xl w-full h-full object-cover"
          src={avatarURL}
        />
      </div>
      <div>
        <div class="text-xl font-bold">{title}</div>
        <div class="font-bold opacity-50">{sellerName}</div>
        <div class="font-bold text-primary-blue">{price}</div>
      </div>
      <div class="ml-auto" on:click={() => push("/offering/" + oID)}>
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
