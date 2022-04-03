<script>
  import OfferingCard from "../components/OfferingCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  let loading = true;
  let data = [
    // {
    //   imgURL:
    //     "https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg",
    //   title: "Hot momos",
    //   price: "1000 rs/plate",
    //   oid: 12,
    // },
  ];
  onMount(() => {
    fetch(BASEURL + "/get-listings", {
      method: "POST",
      body: JSON.stringify({ userid: localStorage.getItem("userID") }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res[0].listings) data = res[0].listings;
        console.log(data);
        loading = false;
      });
  });
</script>

<div class="overflow-auto p-8">
  <NavBar />
  {#if loading}
    <div class="grid h-full place-items-center ">
      <div>loading</div>
    </div>
  {:else}
    <div class="flex justify-between items-center mt-6">
      <div class="font-bold text-xl">Your Offerings</div>
      <div
        on:click={() => {
          push("/add-offering");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
    <div class="my-4">
      {#each data as offering}
        <OfferingCard
          sellerID={localStorage.getItem("userID")}
          isAdmin={true}
          imgURL={offering.opic}
          title={offering.oname}
          price={offering.oprice}
          oid={offering.id}
        />
      {/each}
    </div>
  {/if}
</div>
