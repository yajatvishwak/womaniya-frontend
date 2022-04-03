<script>
  import Button from "../components/Button.svelte";
  import Video from "../components/Video.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Upload from "../components/Upload.svelte";
  import TextInput from "../components/TextInput.svelte";
  import TextArea from "../components/TextArea.svelte";
  import { push } from "svelte-spa-router";
  import { onMount } from "svelte";
  let isOpen = false;
  export let params = {};
  let loading = true;
  onMount(() => {
    fetch(BASEURL + "/getuser", {
      method: "POST",
      body: JSON.stringify({
        userid: localStorage.getItem("userID"),
        requserid: params.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        data = res;
        loading = false;
      });
  });
  let data = {
    id: params.id,
    avatarURL: "",
    username: "",
    location: "",
    story: ``,
    isAdmin: false,
  };
</script>

<input
  type="checkbox"
  checked={isOpen}
  id="edit-profile-modal"
  class="modal-toggle"
/>
<div class="modal ">
  <div class="modal-box  bg-background">
    <h3 class="font-bold text-lg">Edit Your Profile Page</h3>
    <form class="flex flex-col">
      <div>
        <label for=""> Username </label>
        <TextInput />
      </div>
      <div>
        <label for=""> Location </label>
        <TextInput />
      </div>
      <div>
        <label for=""> My Story </label>
        <TextArea />
      </div>

      <label for=""> Upload Display Picture </label>
      <Upload />
    </form>
    <div class="modal-action flex justify-between">
      <div>💾 Save</div>
      <label for="edit-profile-modal" on:click={() => (isOpen = false)} class=""
        >Close</label
      >
    </div>
  </div>
</div>

<div class="overflow-auto p-8">
  <NavBar />

  {#if loading}
    <div class="grid place-items-center h-full">
      <div>loading</div>
    </div>
  {:else}
    <div class="mt-10">
      <div class="h-80 w-full">
        <img
          class="rounded-4xl w-full h-full object-cover"
          src={data.avatarURL}
          alt=""
        />
      </div>
      <div>
        <div class="text-3xl  font-bold text-center mt-5">{data.username}</div>
        <div class="flex gap-2 justify-center items-center">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            /><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            /></svg
          >
          <div class="text-xl font-bold  text-primary-blue">
            {data.location}
          </div>
        </div>
      </div>

      <div class="mt-4 mb-2 font-bold text-xl">My Story</div>
      <div>
        {data.story}
      </div>
      <div>
        <Video />
      </div>
      {#if data.isAdmin}
        <div class="mt-4 mb-2 font-bold text-xl">Actions</div>
        <div class="flex flex-col">
          <Button text="Edit Personal Information" cb={() => (isOpen = true)} />
          <Button red={true} text="Logout" />
        </div>
      {/if}
      <div
        on:click={() => (window.location.href = "https://about.pickforest.me")}
        class="mt-10 flex justify-between items-center"
      >
        <div class="text-3xl opacity-50 text-primary-blue font-bold">
          Womanify
        </div>
        <div class="opacity-50">
          <div>made with ❤️ and ☕</div>
          <div>product of 4 Coders</div>
        </div>
      </div>
    </div>
  {/if}
</div>
