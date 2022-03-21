<script>
  import OfferingCard from "../components/OfferingCard.svelte";
  import CategoryCard from "../components/CategoryCard.svelte";
  import NavBar from "../components/NavBar.svelte";

  let data = {
    username: "bro",
    recentOfferings: [
      // {
      //   sellerName:
      //   avatarURL:
      //   listings: [
      //     {
      //       imgUrl:
      //       title:
      //       price:
      //       oid:
      //     }
      //   ]
      // }

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
    ],
  };
  console.log(data.recentOfferings[0].oid);
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
    Welcome, {data.username}
  </div>
  <div class="text-primary-blue text-xl  font-bold opacity-30 ">
    it is a beautiful sunday
  </div>
  <div class="mt-6 font-bold text-xl">Recently posted</div>
  <div class="my-4">
    {#each data.recentOfferings as offering}
      <OfferingCard
        imgURL={offering.imgURL}
        avatarURL={offering.avatarURL}
        title={offering.title}
        sellerName={offering.sellerName}
        price={offering.price}
        oid={offering.oid}
      />
    {/each}
  </div>
  <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
    Browse Categories
  </div>
  <div class="mt-3">
    <CategoryCard />
  </div>
</div>
