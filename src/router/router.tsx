import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout";
import Home from "../pages/Home";
import Seminars from "../pages/Seminars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/seminars`,
        element: <Seminars/>,
      },
    ],
  },
]);
