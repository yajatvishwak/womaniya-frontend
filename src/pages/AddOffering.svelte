<script>
  import TextInput from "../components/TextInput.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Button from "../components/Button.svelte";
  import Upload from "../components/Upload.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Toastify from "toastify-js";
  import { nanoid } from "nanoid";

  let userid = localStorage.getItem("userID");
  let name = "";
  let desc = "";
  let price = "";
  let unit = "";
  let dp = "";
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="mt-10">
    <div class="text-3xl font-bold text-primary-blue">Add your Offering</div>
    <div class="text-xl font-bold opacity-50 ">and start your business</div>
  </div>
  <div class="mt-6 flex flex-col gap-3">
    <div>
      <label for=""> Offering name</label>
      <TextInput placeholder="what are you selling" bind:text={name} />
    </div>
    <div>
      <label for=""> Offering Description</label>
      <TextArea placeholder="Description of the offering" bind:text={desc} />
    </div>
    <div>
      <label for=""> Offering Price</label>
      <div class="flex gap-3">
        <TextInput placeholder="100" bind:text={price} />
        <TextInput placeholder="per hour" bind:text={unit} />
      </div>
    </div>
    <div>
      <Upload bind:fileURL={dp} />
    </div>
    <div>
      <Button
        text="Submit"
        cb={async () => {
          let payload = {
            userid: userid,
            listing: {
              id: nanoid(),
              oname: name,
              odesc: desc,
              oprice: price + " " + unit,
              opic: dp,
            },
          };
          console.log(payload);

          fetch(BASEURL + "/add-listing", {
            method: "POST",
            body: JSON.stringify(payload),
          })
            .then((payload) => {
              return payload.json();
            })
            .then((response) => {
              console.log(response);
              if (response.ok === 1)
                Toastify({
                  text: "Offering Added 🥳",
                }).showToast();
            });
        }}
      />
    </div>
  </div>
</div>
