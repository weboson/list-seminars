import { FC } from "react";
import { ISeminarsRepository } from "../types/types";

interface IProps {
  data: string | ISeminarsRepository;
  toggle: boolean;
}

const Modal: FC<IProps> = ({ data, toggle }) => {

    console.log(toggle)

    return (
        <div style={{ display: toggle ? "block" : "none" }}>
        Привет
        </div>
    )

//   if (typeof data == "string") {
//     return (
//       <div style={{ display: toggle ? "block" : "none" }}>
//         <p style={{ color: "red" }}>{data}</p>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{ display: toggle ? "block" : "none" }}>{data.title}</div>
//     );
//   }
};

export default Modal;
