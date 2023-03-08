import { HeaderIcon } from "./HeaderIcon";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to=".">
        <HeaderIcon />
      </NavLink>
      <NavLink to="work">
        <HeaderIcon />
      </NavLink>{" "}
      <NavLink to="contact">
        <HeaderIcon />
      </NavLink>{" "}
      <NavLink to=".">
        <HeaderIcon />
      </NavLink>
    </header>
  );
};
