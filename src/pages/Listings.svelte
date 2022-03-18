<script>
  import OfferingCard from "../components/OfferingCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  let data = [
    {
      imgURL:
        "https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg",
      avatarURL:
        "https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
      title: "Hot momos",
      sellerName: "your mom",
      price: "1000 rs/plate",
      oid: 12,
    },
  ];
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="mt-6 font-bold text-xl">Your Listings</div>
  <div class="my-4">
    {#each data as offering}
      <OfferingCard
        isAdmin={true}
        imgURL={offering.imgURL}
        avatarURL={offering.avatarURL}
        title={offering.title}
        sellerName={offering.sellerName}
        price={offering.price}
        oID={offering.oid}
      />
    {/each}
  </div>
</div>
