<script>
  import { push } from "svelte-spa-router";
  import Upload from "../components/Upload.svelte";
  import Toastify from "toastify-js";
  import TextArea from "../components/TextArea.svelte";
  let loading = false;
  let signup = false;
  let name = "";
  let email, password, location, skill, dp, story;
</script>

<div class="overflow-auto p-8 flex  flex-col justify-between h-screen">
  <div>
    <div class="text-primary-blue text-3xl w-1/2  font-bold mt-10 ">
      <div class="text-black">Welcome to</div>
      <div class="text-5xl mt-1">Womaniya</div>
    </div>
    <div class="text-primary-blue mt-2 font-bold opacity-30 ">
      Woman can do business too
    </div>
  </div>
  <div>
    <img src="assets/bg.png" alt="" />
  </div>
  <div class="gap-3 flex  flex-col">
    {#if signup}
      <div class="text-xl mt-3 font-bold ">Signup to unlock your business</div>
      <form
        on:submit={async (e) => {
          e.preventDefault();
          fetch(BASEURL + "/signup", {
            method: "POST",
            body: JSON.stringify({
              username: name,
              location,
              skill,
              email,
              story,
              password,
              avatarURL: dp,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              if (res._id.$oid != null || res._id.$oid != undefined) {
                Toastify({
                  text: "Signup Successful🥳",
                }).showToast();
                localStorage.setItem("userID", res._id.$oid);
                push("/home");
              }
            });
        }}
        class="w-full gap-3 flex flex-col"
      >
        <input
          type="text"
          class=" rounded-xl p-3 bg-white w-full"
          placeholder="Name"
          bind:value={name}
        />
        <input
          type="text"
          class=" rounded-xl p-3 bg-white w-full"
          placeholder="Location"
          bind:value={location}
        />
        <TextArea placeholder="Your Story" bind:text={story} />
        <select
          class="bg-transparent border-2  border-primary-blue-100 rounded-xl ml-auto p-2"
          name=""
          bind:value={skill}
          id=""
        >
          <option value="DIY">DIY</option>
          <option value="Cooking">Cooking and Food</option>
          <option value="Fashion">Beauty and Fashion</option>
          <option value="Teaching">Teaching and Education</option>
          <option value="Other">Others</option>
        </select>

        <input
          type="text"
          class=" rounded-xl p-3 bg-white w-full"
          placeholder="Skill"
          bind:value={skill}
        />
        <input
          type="text"
          class=" rounded-xl p-3 bg-white w-full"
          placeholder="Email"
          bind:value={email}
        />
        <input
          type="password"
          class=" bg-white w-full p-3 rounded-xl"
          placeholder="Password"
          bind:value={password}
        />

        <Upload bind:fileURL={dp} />
        <div on:click={() => (signup = !signup)}>Not New here? Login</div>

        <button type="submit" class="btn mt-5 bg-primary-blue"> Submit</button>
      </form>
    {:else}
      <div class="text-xl mt-3 font-bold ">Login to unlock your business</div>
      <form
        on:submit={async (e) => {
          e.preventDefault();
          fetch(BASEURL + "/signin", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              if (res[0]._id.$oid != null || res[0]._id.$oid != undefined) {
                Toastify({
                  text: "Signin Successful🥳",
                }).showToast();
                localStorage.setItem("userID", res[0]._id.$oid);
                push("/home");
              }
            });
        }}
        class="w-full gap-3 flex flex-col"
      >
        <input
          type="text"
          class=" rounded-xl p-3 bg-white w-full"
          placeholder="Email"
          bind:value={email}
        />
        <input
          type="password"
          class=" bg-white w-full p-3 rounded-xl"
          placeholder="Password"
          bind:value={password}
        />
        <div on:click={() => (signup = !signup)}>New here? Sign up</div>

        <button class="btn mt-5 bg-primary-blue"> Submit</button>
      </form>
    {/if}
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
