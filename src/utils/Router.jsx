import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import Search from "../components/Search";

const ProductList = lazy(() => import("../components/ProductList"));
const Cart = lazy(() => import("../components/Cart"));
const ProductDetails = lazy(() => import("../components/ProductDetail"));

const BrowseRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            {" "}
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/cart",

        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/search/:name",
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

export default BrowseRouter;
