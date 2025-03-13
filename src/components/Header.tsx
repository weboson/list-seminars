import { FC } from "react";
import { NavLink } from "react-router";
import { menu } from "../data/menu";

const Header: FC = () => {
  return (
    <>
      <nav>
        {menu.map((item) => (
          <>
            <NavLink
              to={item.url}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              {item.title}
            </NavLink>
          </>
        ))}
      </nav>
    </>
  );
};

export default Header;
