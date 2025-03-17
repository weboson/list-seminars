import { FC, useEffect, useState } from "react";
import { ISeminarsRepository } from "../types/types";
import { SeminarsService } from "../services/seminares.services";
import SeminarItem from "../components/SeminarItem";
import Modal from "../components/Modal";


const Seminars: FC = () => {
  const [seminars, setSeminars] = useState<ISeminarsRepository[]>([]);

    //! modal - пока не работает
    const [modal, setModal] = useState(false);
    const toggleModal = (bool: boolean) => {
        setModal(bool)
    }


  // метод запроса на пагинацию: recipes/pagination?page=1&limit=1
  const fetchSeminars = async () => {
    const allSeminars= await SeminarsService.getAll(); //  все seminars из БД
    setSeminars(allSeminars); // порция
  };

  useEffect(() => {
    fetchSeminars();
  }, []); // зависимость data

  console.log(seminars)

  return <>
    <ul>
        {seminars.map((item, index) => (
            <li key={index+2}>
                <SeminarItem seminar={item} toggle={toggleModal}/>
            </li>
        ))}
    </ul>
    <Modal data={'Вы собираетесь удалить семинар. Вы уверены?'} toggle={modal}/>
  </>;
};

export default Seminars;
