<script>
  import AwaitingOrderCard from "../components/AwaitingOrderCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  let data = [
    {
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
  <div class="mt-10">
    <div class="text-2xl font-bold">Awaiting Orders</div>
    <div class="mt-2 flex flex-col  gap-3">
      {#each data as awaiting}
        <AwaitingOrderCard
          avatarURL={awaiting.avatarURL}
          title={awaiting.title}
          buyerName={awaiting.buyerName}
          price={awaiting.price}
          status={awaiting.status}
          statusText={awaiting.statusText}
        />
      {/each}
    </div>
  </div>
</div>
