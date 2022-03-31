<script>
  import OfferingProfileCard from "../components/OfferingProfileCard.svelte";
  import Slider from "../components/Slider.svelte";
  import NavBar from "../components/NavBar.svelte";
  import { onMount } from "svelte";
  import Toastify from "toastify-js";
  export let params = {};
  let loading = true;
  console.log(params.userID, params.id);
  onMount(() => {
    fetch(BASEURL + "/get-onelisting", {
      method: "POST",
      body: JSON.stringify({
        userid: params.userID,
        listingid: params.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        data.title = res.oname;
        data.desc = res.odesc;
        data.price = res.oprice;
        data.opic = res.opic;
        data.seller.sellerID = res.seller[0]._id.$oid;
        data.seller.avatarURL = res.seller[0].avatarURL;
        data.seller.sellerLocation = res.seller[0].location;
        data.seller.sellerName = res.seller[0].username;
        loading = false;
      });
  });
  function createOrder() {
    loading = true;
    fetch(BASEURL + "/createorder", {
      method: "POST",
      body: JSON.stringify({
        buyerid: localStorage.getItem("userID"),
        sellerid: params.userID,
        listingid: params.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "Awaiting")
          Toastify({
            text: "Order placed! 🥳",
          }).showToast();
        loading = false;
      });
  }
  // console.log(params.id)
  let data = {
    // sellerID: 12,
    //   avatarURL:
    //     "https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
    //   sellerName: "Yojar",
    //   sellerLocation: "Banaglore",
    //   sellerDesc: "yooyyoyoyo wasssup",
    //   listings: [{
    //     title: "Hot momos",
    // desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur
    // nesciunt ut omnis explicabo mollitia animi. Quas, autem deleniti culpa nam
    // nulla quia aperiam. Est, quos quasi. Iusto, nemo? Inventore?`,
    // oid: params.id,
    // price: "1000 / per plate",
    //   }]
    title: "Hot momos",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur
    nesciunt ut omnis explicabo mollitia animi. Quas, autem deleniti culpa nam
    nulla quia aperiam. Est, quos quasi. Iusto, nemo? Inventore?`,
    oid: params.id,
    price: "1000 / per plate",
    opic: "https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
    seller: {
      sellerID: 12,
      avatarURL:
        "https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
      sellerName: "Yojar",
      sellerLocation: "Banaglore",
      sellerDesc: "yooyyoyoyo wasssup",
    },
  };
</script>

<div class="overflow-auto p-8">
  <NavBar />
  {#if loading}
    <div class="grid place-items-center">
      <div>loading</div>
    </div>
  {:else}
    <div class="w-full mt-10">
      <img class="w-full rounded-4xl object-cover" src={data.opic} alt="" />
    </div>
    <div class="mt-6 font-bold text-3xl text-primary-blue">{data.title}</div>
    <div class="mt-2">
      {data.desc}
    </div>
    <div class="my-6">
      <OfferingProfileCard
        avatarURL={data.seller.avatarURL}
        sellerName={data.seller.sellerName}
        sellerID={data.seller.sellerID}
        sellerLocation={data.seller.sellerLocation}
      />
    </div>
    <div>
      <Slider price={data.price} cb={createOrder} />
    </div>
  {/if}
</div>
