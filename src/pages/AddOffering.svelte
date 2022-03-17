<script>
  import TextInput from "../components/TextInput.svelte";
  import Button from "../components/Button.svelte";
  import OfferingCard from "../components/OfferingCard.svelte";
  import CategoryCard from "../components/CategoryCard.svelte";
  import OfferingProfileCard from "../components/OfferingProfileCard.svelte";
  import Slider from "../components/Slider.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Upload from "../components/Upload.svelte";
  import Video from "../components/Video.svelte";
  import PreviousOrderCard from "../components/PreviousOrderCard.svelte";
  import AwaitingOrderCard from "../components/AwaitingOrderCard.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<div class="overflow-auto p-8">
  <NavBar />
  <div class="mt-10">
    <div class="text-3xl font-bold text-primary-blue">Add your Offering</div>
    <div class="text-2xl font-bold opacity-50">it's free</div>
  </div>
  <div class="mt-6 flex flex-col gap-3">
    <div>
      <label for=""> Offering name</label>
      <TextInput />
    </div>
    <div>
      <label for=""> Offering Description</label>
      <TextInput />
    </div>
    <div>
      <label for=""> Offering Price</label>
      <div class="flex gap-3">
        <TextInput />
        <TextInput />
      </div>
    </div>
    <div>
      <Upload />
    </div>
    <div>
      <Button text="Submit" />
    </div>
  </div>
</div>
