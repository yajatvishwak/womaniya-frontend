<script>
  import { push } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  let isopen = false;
  let superseller = false;
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
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center font-bold text-xl text-fuchsia-500"
        >
          Home 🏡
        </div>

        <div class="py-3  flex justify-start items-start self-start">
          <div class="text-xl">Seller Zone</div>
        </div>
        <div
          on:click={() => {
            push("/listings");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center font-bold  text-xl text-fuchsia-500"
        >
          Your Offerings 🪐
        </div>
        <!-- <div
          on:click={() => {
            push("/add-offering");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center font-bold text-xl text-fuchsia-500"
        >
          Add new Offering 📝
        </div> -->
        <div
          on:click={() => {
            push("/awaiting-orders");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-fuchsia-200 w-full text-center font-bold  text-xl text-fuchsia-500"
        >
          Awaiting Orders💰
        </div>

        <div class="py-3  flex justify-start items-start self-start">
          <div class="text-xl">Buyer Zone</div>
        </div>
        <div
          on:click={() => {
            push("/previous-orders");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-blue-200 w-full text-center  text-xl font-bold text-blue-500"
        >
          Your Orders 📦
        </div>
        <div
          on:click={() => {
            push("/profile/" + localStorage.getItem("userID"));
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-blue-200 w-full text-center  text-xl font-bold text-blue-500"
        >
          Profile 😁
        </div>

        <div class="py-3  flex justify-start items-start self-start">
          <div class="text-xl">Super Seller Zone</div>
        </div>
        <div
          on:click={() => {
            push("/previous-orders");
            isopen = false;
          }}
          class="p-5 rounded-2xl bg-blue-200 w-full text-center  text-xl font-bold text-blue-500 "
        >
          Super Charge your business 🚀
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div
        on:dblclick={() => {
          console.log("db");
          superseller = true;
        }}
        class="text-3xl opacity-50 text-primary-blue font-bold"
      >
        <span
          on:click={() => {
            superseller = true;
          }}>Wo</span
        >manify
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
