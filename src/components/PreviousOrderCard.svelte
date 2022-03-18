<script>
  export let imgURL = "";
  export let avatarURL = "";
  export let title = "";
  export let sellerName = "";
  export let price = "";
  export let date = "";
  export let status = "⏳";
</script>

<div class="w-full py-2 relative">
  <img class="w-full rounded-4xl h-72 object-cover" src={imgURL} alt="" />
  <div class="px-5  w-full absolute bottom-5 left-0">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-4"
    >
      <div class="h-24 w-20">
        <img
          alt="seller"
          class="rounded-3xl w-full h-full object-cover"
          src={avatarURL}
        />
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between  ">
          <div class="text-xl font-bold ">{title}</div>
          <div>{status}</div>
        </div>
        <div class="font-bold opacity-50">{sellerName}</div>
        <div class="font-bold text-primary-blue justify-between flex">
          <div>{price}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  </div>
</div>
