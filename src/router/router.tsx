import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Seminars from "../pages/Seminars";
import Error from "../pages/Error";
import Contacts from "../pages/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/seminars`,
        element: <Seminars/>,
      },
      {
        path: `/contacts`,
        element: <Contacts/>,
      },
    ],
  },
]);
