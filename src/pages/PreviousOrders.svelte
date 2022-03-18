<script>
  import PreviousOrderCard from "../components/PreviousOrderCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  let data = [
    {
      imgURL:
        "https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg",
      avatarURL:
        "https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
      title: "Hot momos",
      sellerName: "yooooo",
      price: "1002 per/hour",
      date: "1/2/2",
      status: "✅",
    },
  ];
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="mt-10">
    <div class="text-2xl font-bold">Previous Orders</div>
    <div class="mt-2 flex flex-col gap-2">
      {#each data as previous}
        <PreviousOrderCard
          imgURL={previous.imgURL}
          avatarURL={previous.avatarURL}
          title={previous.title}
          sellerName={previous.sellerName}
          price={previous.price}
          date={previous.date}
          status={previous.status}
        />
      {/each}
    </div>
  </div>
</div>
