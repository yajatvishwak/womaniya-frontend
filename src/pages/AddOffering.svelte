<script>
  import TextInput from "../components/TextInput.svelte";
  import Button from "../components/Button.svelte";
  import Upload from "../components/Upload.svelte";
  import NavBar from "../components/NavBar.svelte";
  let name = "";
  let desc = "";
  let price = "";
  let unit = "";
  let dp = null;
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
      <TextInput bind:text={name} />
    </div>
    <div>
      <label for=""> Offering Description</label>
      <TextInput bind:text={desc} />
    </div>
    <div>
      <label for=""> Offering Price</label>
      <div class="flex gap-3">
        <TextInput bind:text={price} />
        <TextInput bind:text={unit} />
      </div>
    </div>
    <div>
      <Upload bind:file={dp} />
    </div>
    <div>
      <Button
        text="Submit"
        cb={() => {
          console.log(name, desc, price, unit, dp);
          let payload = { name, desc, price: price + " " + unit, dp };
        }}
      />
    </div>
  </div>
</div>
