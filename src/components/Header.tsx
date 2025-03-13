import { FC } from "react";
import { NavLink } from "react-router";
import { menu } from "../data/menu";

const Header: FC = () => {
  return (
    <>
      <nav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                key={index}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
