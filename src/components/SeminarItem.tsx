import { FC, useEffect, useState } from "react";
import { ISeminarsRepository } from "../types/types";
import { StylesTrash, WrapperItem } from "../styles/styles";
import { FaTrashArrowUp } from "react-icons/fa6";

interface IProps {
  seminar: ISeminarsRepository;
  toggle: Function
}

const Seminarseminar: FC<IProps> = ({ seminar, toggle }) => {


  useEffect(() => {
    document.querySelector("#delete")?.addEventListener("click", () => {
        toggle(true);
      console.log('click')
    });
  });

  return (
    <>
      <WrapperItem>
        <div>id: {seminar.id}</div>
        <div>title: {seminar.title}</div>
        <div>description: {seminar.description}</div>
        <div>date: {seminar.date}</div>
        <div>time: {seminar.time}</div>
        <div>
          photo: <img src={`${seminar.photo}`} alt="photo" />
        </div>
        <StylesTrash id="delete">
          <FaTrashArrowUp />
        </StylesTrash>
      </WrapperItem>
    </>
  );
};

export default Seminarseminar;
