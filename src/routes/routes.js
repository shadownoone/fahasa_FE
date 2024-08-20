import config from "../config";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";

import NotFound from "../components/NotFound";

import ProductLayout from "../components/Layout/DefaultLayout/ProductLayout";

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
        layout: ProductLayout,
    },
    {
        path: config.routes.cart,
        component: Cart,
        layout: ProductLayout,
    },
    {
        path: config.routes.checkout,
        component: Checkout,
        layout: ProductLayout,
    },
    {
        path: config.routes.success,
        component: Success,
        layout: ProductLayout,
    },
    {
        path: config.routes.notfound,
        component: NotFound,
        layout: ProductLayout,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
