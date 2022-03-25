<script>
  import { push } from "svelte-spa-router";
  let loading1 = false;
  let loading2 = false;
</script>

<div class="overflow-auto p-8 flex  flex-col justify-between h-screen">
  <div>
    <div class="text-primary-blue text-3xl w-1/2  font-bold mt-10 ">
      <div class="text-black">Welcome to</div>
      <div class="text-5xl mt-1">Womanify</div>
    </div>
    <div class="text-primary-blue mt-2 font-bold opacity-30 ">
      Woman can do business too
    </div>
  </div>
  <div>
    <img src="assets/bg.png" alt="" />
  </div>
  <div class="gap-3 flex flex-col">
    <div
      on:click={() => {
        loading1 = true;
        localStorage.setItem("userID", "6239e176d27797c9810aed11");
        setTimeout(() => {
          push("/home");
        }, 3000);
      }}
      class="btn  w-full bg-white border-0 mt-auto text-primary-blue hover:bg-white"
    >
      {#if loading1}
        <div class="spinner">
          <div class="rect1" />
          <div class="rect2" />
          <div class="rect3" />
          <div class="rect4" />
        </div>
      {:else}
        <div>Login with Google</div>
      {/if}
    </div>
    <div
      on:click={() => {
        loading2 = true;
        localStorage.setItem("userID", "6239e282d27797c9810aed12");
        setTimeout(() => {
          push("/home");
        }, 3000);
      }}
      class="btn  w-full bg-primary-blue mt-auto"
    >
      {#if loading2}
        <div class="spinner ">
          <div class="rect1" />
          <div class="rect2" />
          <div class="rect3" />
          <div class="rect4" />
        </div>
      {:else}
        <div>Login with Facebook</div>
      {/if}
    </div>
  </div>
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
