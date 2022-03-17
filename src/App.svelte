<script>
  import routes from "./router";
  import Router from "svelte-spa-router";
</script>

<Router {routes} />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  body {
    @apply bg-background h-full min-h-screen  overflow-auto;
  }
</style>
