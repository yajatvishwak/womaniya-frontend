import Home from './pages/Home.svelte'
import Preview from './pages/Preview.svelte'
import Offering from './pages/Offering.svelte'
import AddOffering from './pages/AddOffering.svelte'
import Profile from './pages/Profile.svelte'
import PreviousOrders from './pages/PreviousOrders.svelte'
import AwaitingOrders from './pages/AwaitingOrders.svelte'


const routes = {
    // Exact path
    '/': Preview,
    '/home' : Home,
    '/offering' : Offering,
    '/add-offering' : AddOffering,
    '/profile' : Profile,
    '/previous-orders' : PreviousOrders,
    '/awaiting-orders' : AwaitingOrders,

}
export default routes;