import Home from "./pages/Home.svelte";
import Preview from "./pages/Preview.svelte";
import Offering from "./pages/Offering.svelte";
import AddOffering from "./pages/AddOffering.svelte";
import Profile from "./pages/Profile.svelte";
import PreviousOrders from "./pages/PreviousOrders.svelte";
import AwaitingOrders from "./pages/AwaitingOrders.svelte";
import Listings from "./pages/Listings.svelte";
import Login from "./pages/Login.svelte";
import Teams from "./pages/Teams.svelte";

const routes = {
  // Exact path
  "/": Login,
  "/home": Home,
  "/offering/:userID/:id": Offering,
  "/teams": Teams,
  "/add-offering": AddOffering,
  "/profile/:id": Profile,
  "/previous-orders": PreviousOrders,
  "/awaiting-orders": AwaitingOrders,
  "/listings": Listings,
};
export default routes;
