<script>
  import ConnectCard from "../components/ConnectCard.svelte";

  import TextInput from "../components/TextInput.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Button from "../components/Button.svelte";
  import Upload from "../components/Upload.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Toastify from "toastify-js";
  import { nanoid } from "nanoid";
  import Line from "svelte-chartjs/src/Line.svelte";
  let predict = false;
  let skill = "";
  let predictloading = false;
  let dataLine = {
    labels: ["Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022", "Mar 2022"],
    datasets: [
      {
        fill: true,
        label: "Sales",
        backgroundColor: "rgba(225, 204,230, .7)",
        pointRadius: 1,
        pointHitRadius: 10,
        borderJoinStyle: "round",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "transparent",
        data: [80, 73, 62, 71, 64],
      },
      {
        fill: true,
        label: "Sales(Pred)",
        backgroundColor: "rgba(225, 255,255)",
        pointRadius: 1,
        pointHitRadius: 10,
        borderJoinStyle: "round",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "transparent",
        borderDash: [10, 10],
        data: [, , , , 64],
      },
    ],
  };

  let data = [
    {
      _id: {
        $oid: "",
      },
      id: "bro",
      username: "bro",
      skill: "bro",
      avatarURL:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    },
  ];
  function onChangeSkill() {
    fetch(BASEURL2 + "/teams", {
      method: "POST",
      body: JSON.stringify({ skill }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        data = res;
      });
  }
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="mt-10">
    <div class="text-3xl font-bold text-primary-blue">
      Become a Super Seller
    </div>
    <div class="opacity-50 ">Team up and expand your business</div>
  </div>

  <div class="mt-6 flex flex-col gap-3">
    <div>Your Sales data</div>
    <div class="bg-white rounded-3xl p-2">
      <Line data={dataLine} />
    </div>
  </div>
  {#if predict}
    <div class="my-10">
      We notice an up trend in one of the item you are selling. Our prediction
      is your item will have an insurge of orders. Expand your team to handle
      sudden high traffic and keep your business afloat
    </div>
    <div class="flex gap-3">
      <div class="p-5 pb-10 w-full bg-white rounded-2xl">
        <div class="flex items-center justify-between">
          Current Item Sales <svg
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <div class="text-4xl text-center mt-7 font-bold">64</div>
      </div>
      <div class="p-5 pb-10 w-full bg-white rounded-2xl">
        <div class="flex items-center justify-between">
          Predicted Sales <svg
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
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div class="text-4xl text-center mt-7 font-bold">77</div>
      </div>
    </div>
    <div class="my-10">
      <div class="flex">
        <div>
          <div class="text-2xl font-bold">Team up</div>
          <div class="opacity-50">just like avengers did</div>
        </div>
        <select
          class="bg-transparent border-2  border-primary-blue-100 rounded-xl ml-auto p-2"
          name=""
          bind:value={skill}
          on:change={onChangeSkill}
          id=""
        >
          <option value="DIY">DIY</option>
          <option value="Cooking">Cooking and Food</option>
          <option value="Fashion">Beauty and Fashion</option>
          <option value="Teaching">Teaching and Education</option>
          <option value="Other">Others</option>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        {#each data as bro}
          <ConnectCard
            avatarURL={bro.avatarURL}
            name={bro.username}
            skill={bro.skill}
            sellerID={bro._id.$oid}
          />
        {/each}
      </div>
    </div>
  {:else}
    <div
      on:click={() => {
        predictloading = true;
        setTimeout(() => {
          predict = true;
          dataLine.datasets[1].data.push(77);
          dataLine.labels.push("April 2022(predicted)");
          dataLine = { ...dataLine };
        }, 4000);
      }}
    >
      {#if !predictloading}
        <div
          class="p-3 my-10 hover:border-primary-blue hover:border-2 bg-primary-blue-100 text-center text-primary-blue font-bold rounded-xl"
        >
          Check eligibility for Super-Seller
        </div>
      {:else}
        <div class="my-10 text-center flex gap-3 justify-center items-center">
          Hold On Calculating...
          <div class="spinner ">
            <div class="rect1" />
            <div class="rect2" />
            <div class="rect3" />
            <div class="rect4" />
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .spinner {
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    @apply bg-blue-800;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
</style>
