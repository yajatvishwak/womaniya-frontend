<script>
  import Toastify from "toastify-js";

  import Button from "./Button.svelte";
  export let avatarURL = "";
  export let orderid = "";
  export let title = "";
  export let buyerName = "";
  export let price = "";
  export let status = "⏳";
  export let statusText = "Awaiting";
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box bg-white">
    <div>
      <div class="flex justify-between">
        <div class="font-bold opacity-50">#{orderid}</div>
        <label for="my-modal">❌</label>
      </div>
      <div class="text-2xl font-bold">{title}</div>
      <div class="text-primary-blue font-bold">{price}</div>
    </div>
    <div class=" w-full">
      <div class="w-full flex items-center  gap-4">
        <div class="w-10  ml-auto">
          <img class="rounded-4xl" src={avatarURL} alt="" srcset="" />
        </div>
        <div class="">
          <div class="opacity-50  font-bold">ordered by</div>
          <div class="text-xl font-bold">{buyerName}</div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center flex-wrap mt-10 gap-3">
      <Button
        text="Completed ✅"
        cb={async () => {
          fetch(BASEURL + "/orderstat", {
            method: "POST",
            body: JSON.stringify({ orderid, status: "Completed" }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              if (res.message === "success") {
                Toastify({
                  text: "Offering Added 🥳",
                }).showToast();
              }
            });
        }}
      />
      <Button
        text="Cancelled ❌"
        cb={async () => {
          fetch(BASEURL + "/orderstat", {
            method: "POST",
            body: JSON.stringify({ orderid, status: "Cancelled" }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              if (res.message === "success") {
                Toastify({
                  text: "Offering Added 🥳",
                }).showToast();
              }
            });
        }}
      />
    </div>
  </div>
</div>

<div class="">
  <label for="my-modal" class="  w-full">
    <div
      class="rounded-4xl flex items-center gap-5 w-full bg-white shadow-sm p-4"
    >
      <div class="h-24 w-20">
        <img class="rounded-3xl w-full h-full object-cover" src={avatarURL} />
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between  ">
          <div class="text-xl font-bold ">{title}</div>
          <div>{status}</div>
        </div>
        <div class="font-bold opacity-50">{buyerName}</div>
        <div class="font-bold text-primary-blue justify-between flex">
          <div>{statusText}</div>
        </div>
      </div>
    </div>
  </label>
</div>
