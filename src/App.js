import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./redux/store";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserHomepage from "./Pages/UserHomepage";
import Cart from "./Pages/Cart";
import DealsAndOffers from "./Pages/DealsAndOffers";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Address from "./Pages/Address";
import AddNewAddress from "./Pages/AddNewAddress";
import Orders from "./Pages/Orders";
import OrderDetails from "./Pages/OrderDetails";
import UpdateCurrentLocation from "./Pages/UpdateCurrentLocation";

const router = createBrowserRouter([
  {
    path: "/",

    element: <UserHomepage />,
  },
  {
    path: "/cart",

    element: <Cart />,
  },
  {
    path: "/deals",

    element: <DealsAndOffers />,
  },
  {
    path: "/login",

    element: <Login />,
  },
  {
    path: "/signup",

    element: <SignUp />,
  },
  {
    path: "/myprofile",

    element: <Profile />,
  },
  {
    path: "/address",

    element: <Address />,
  },
  {
    path: "/addNewAddress",
    element: <AddNewAddress />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/order/:orderID",

    element: <OrderDetails />,
  },
  {
    path: "/UpdateCurrentAddress",
    element: <UpdateCurrentLocation />,
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
