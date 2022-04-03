<script>
  import OfferingCard from "../components/OfferingCard.svelte";
  import CategoryCard from "../components/CategoryCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  import { onMount } from "svelte";
  let userid = localStorage.getItem("userID");
  console.log(userid);
  let d = new Date();
  let n = d.toLocaleString("en-US", { weekday: "long" });
  let loading = true;
  onMount(() => {
    fetch(BASEURL + "/home", {
      method: "POST",
      body: JSON.stringify({ userid: userid }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        data.username = res.username;
        let listings = res.recentOfferings.map((item) => {
          if (item.listings)
            return item.listings.map((i) => {
              return {
                ...i,
                sellerName: item.username,
                avatarURL: item.avatarURL,
                sellerID: item._id.$oid,
              };
            });
        });
        console.log(listings.flat());
        listings = listings.flat().filter((item) => {
          if (item && item.sellerID !== localStorage.getItem("userID"))
            return item;
        });
        console.log(listings.flat());

        data.recentOfferings = listings.flat();
        loading = false;
      });
  });
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
    ],
  };
</script>

<div class="overflow-auto p-8">
  <NavBar />
  {#if loading}
    <div class="h-full grid place-items-center">
      <div>loading</div>
    </div>
  {:else}
    <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
      Welcome, {data.username}
    </div>
    <div class="text-primary-blue text-xl  font-bold opacity-30 ">
      it is a beautiful {n}
    </div>
    <div class="mt-6 font-bold text-xl">Recently posted</div>
    <div class="my-4">
      {#each data.recentOfferings as offering}
        <OfferingCard
          imgURL={offering.opic}
          avatarURL={offering.avatarURL}
          title={offering.oname}
          sellerName={offering.sellerName}
          sellerID={offering.sellerID}
          price={offering.oprice}
          oid={offering.id}
        />
      {/each}
    </div>
    <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
      Browse Categories
    </div>
    <div class="mt-3">
      <CategoryCard />
    </div>
  {/if}
</div>
