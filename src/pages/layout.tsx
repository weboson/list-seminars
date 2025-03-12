import { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router"; // означет главный шаблон для всех компонентов (всё что находится в массиве в router.tsx)

const layout: FC = () => {
  return (
    <>
      <Header />
      {/*// Outlet - это уникальный контент (Home.tsx, Contact.tsx etc. but not ErrorPage.tsx) от 'react-router-dom'*/}
      <Outlet />
    </>
  );
};

export default layout;
