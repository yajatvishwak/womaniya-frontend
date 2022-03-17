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
  <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
    hello, Savita bhabhi
  </div>
  <div class="text-primary-blue text-xl  font-bold opacity-30 ">
    it is a beautiful sunday
  </div>
  <div class="mt-6 font-bold text-xl">Recently posted</div>
  <div class="my-4">
    <OfferingCard />
    <OfferingCard />
    <OfferingCard />
  </div>
  <div class="text-primary-blue text-3xl w-44 font-bold mt-10 ">
    Browse Categories
  </div>
  <div class="mt-3">
    <CategoryCard />
  </div>
</div>
