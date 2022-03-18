<script>
import { push } from "svelte-spa-router";


  export let avatarURL = "";
  export let sellerName = "";
  export let sellerDesc = "";
  export let sellerLocation = "";
  export let sellerID = "";
</script>

<div class=" p-2">
  <div class=" w-full">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-4"
    >
      <div class="h-24 w-20">
        <img
          alt="seller"
          class="rounded-3xl w-full h-full object-cover"
          src={avatarURL}
        />
      </div>
      <div class="flex-1">
        <div class="text-xl font-bold">{sellerName}</div>
        <div class="font-bold opacity-50 text-sm">
          {sellerDesc}
        </div>
        <div class="font-bold text-primary-blue flex gap-1 mt-2">
          <div >
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              /><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              /></svg
            >
          </div>
          <div>{sellerLocation}</div>
        </div>
      </div>
      <div on:click={() => push("/profile/"+sellerID)} class="ml-auto">
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
