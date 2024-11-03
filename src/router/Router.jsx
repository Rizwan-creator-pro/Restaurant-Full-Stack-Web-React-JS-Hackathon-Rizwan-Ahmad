import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";
import Testing from "../components/Testing";
import DashboardLayout from "../layout/DashboardLayout";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import Menu from "../pages/shop/Menu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import Users from "../pages/dashboard/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/test",
        element: (
          <PrivateRouter>
            <Testing />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      // {
      //   path: "",
      //   element: <Dashboard />,
      // },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      // {
      //   path: "update-menu/:id",
      //   element: <UpdateMenu />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:6001/menu/${params.id}`),
      // },
      // {
      //   path: "manage-bookings",
      //   element: <ManageBookings />,
      // },
      // {
      //   path: "create-offer",
      //   element: <AdminOfferForm />,
      // },
    ],
  },
]);

export default router;
