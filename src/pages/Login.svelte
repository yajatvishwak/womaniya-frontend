<script>
  import { push } from "svelte-spa-router";
  let loading = false;
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
  <div class="gap-3 flex  flex-col">
    <div class="text-xl mt-3 font-bold ">Login to unlock your business</div>

    <form class="w-full gap-3 flex flex-col">
      <input
        type="text"
        class=" rounded-xl p-3 bg-white w-full"
        placeholder="Email"
      />
      <input
        type="password"
        class=" bg-white w-full p-3 rounded-xl"
        placeholder="Password"
      />
      <div>New here? Sign up</div>

      <button class="btn mt-5 bg-primary-blue"> Submit</button>
    </form>
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
