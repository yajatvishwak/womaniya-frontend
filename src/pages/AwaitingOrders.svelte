<script>
  import { onMount } from "svelte";

  import AwaitingOrderCard from "../components/AwaitingOrderCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  let loading = true;
  onMount(() => {
    fetch("http://localhost:3001/await", {
      method: "POST",
      body: JSON.stringify({ sellerid: localStorage.getItem("userID") }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        data = res;
        loading = false;
      });
  });
  let data = [
    {
      orderid: "orderid",
      avatarURL:
        "https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
      title: "Hot momos",
      buyerName: "brooooo",
      price: "123 per plate",
      status: "⏳",
      statusText: "Awaiting",
    },
  ];
</script>

<div class="overflow-auto p-8">
  <NavBar />
  {#if loading}
    <div class="w-full text-center">loading...</div>
  {:else}
    <div class="mt-10">
      <div class="text-2xl font-bold">Awaiting Orders</div>
      <div class="mt-2 flex flex-col  gap-3">
        {#each data as awaiting}
          <AwaitingOrderCard
            orderid={awaiting.orderid}
            avatarURL={awaiting.avatarURL}
            title={awaiting.title}
            buyerName={awaiting.buyerName}
            price={awaiting.price}
            status={awaiting.status.toLowerCase() === "awaiting"
              ? "⏳"
              : awaiting.status.toLowerCase() === "completed"
              ? "✅"
              : "❌"}
            statusText={awaiting.statusText}
          />
        {/each}
      </div>
    </div>
  {/if}
</div>
