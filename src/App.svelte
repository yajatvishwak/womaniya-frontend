<script>
  import routes from "./router";
  import Toastify from "toastify-js";
  import "toastify-js/src/toastify.css";
  import Router from "svelte-spa-router";
</script>

<div class="relative">
  <Router {routes} />
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
  body {
    @apply bg-background h-full min-h-screen  overflow-auto text-black;
    font-family: "Space Grotesk", sans-serif;
  }
</style>
