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
  <div class="px-3  w-full absolute bottom-5 left-0">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-4"
    >
      <div class="flex-1">
        <div class="flex items-center justify-between  ">
          <div class="text-xl font-bold ">{title}</div>
          <div class="font-bold text-xs opacity-50">
            Order Completed {status}
          </div>
        </div>
        <div
          class="font-bold opacity-70 flex justify-between w-full text-primary-blue"
        >
          <div>by {sellerName}</div>
          <div class="">
            {date}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
