import { FC, useEffect, useState } from "react";
import { ISeminarsRepository } from "../types/types";
import { SeminarsService } from "../services/seminares.services";

const Seminars: FC = () => {
  const [seminars, setSeminars] = useState<ISeminarsRepository[]>([]);

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
    <div>
        {seminars.map((item) => (
            <>
                {item.title}
            </>
        ))}
    </div>
  </>;
};

export default Seminars;
