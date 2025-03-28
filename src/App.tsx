import { FC } from "react";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import './App.css'

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
